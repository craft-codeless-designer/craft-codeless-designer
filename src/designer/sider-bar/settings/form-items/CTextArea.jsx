import { useNode } from '@craftjs/core';
import { Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

/**
 * @class CTextArea
 *
 * 大段文本区域
 *
 * 用于 Settings 面板中，修改组件的各种属性。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CTextArea = ({ propKey, onChange, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    return { propValue: JSON.stringify(node.data.props[propKey]) };
  });

  return (
    <TextArea
      rows={30}
      value={propValue}
      onChange={evt => {
        let val = JSON.parse(evt.target.value);
        setProp(props => {
          props[propKey] = onChange ? onChange(val) : val;
        }, 100);
      }}
      {...props}
    />
  );
};
