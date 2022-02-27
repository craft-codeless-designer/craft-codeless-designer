import { useNode } from '@craftjs/core';
import { Input } from 'antd';
import React from 'react';

/**
 * @class CTextInput
 *
 * 文本框。
 *
 * 用于 Settings 面板中，修改组件的各种属性。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CTextInput = ({ propKey = 'fontSize', onChange, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    return { propValue: node.data.props[propKey] };
  });

  return (
    <Input
      value={propValue}
      onChange={evt => {
        let val = evt.target.value;
        setProp(props => {
          props[propKey] = onChange ? onChange(val) : val;
        }, 100);
      }}
      {...props}
    />
  );
};
