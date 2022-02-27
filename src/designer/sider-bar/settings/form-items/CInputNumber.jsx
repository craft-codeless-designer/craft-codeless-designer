import { useNode } from '@craftjs/core';
import { InputNumber } from 'antd';
import React from 'react';

/**
 * @class CInputNumber
 *
 * 数字输入框。
 *
 * 用于 Settings 面板中，修改组件的各种属性。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CInputNumber = ({ propKey = 'fontSize', onChange, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    return { propValue: node.data.props[propKey] };
  });

  return (
    <InputNumber
      min={1}
      max={100}
      value={propValue}
      onChange={val => {
        setProp(props => {
          props[propKey] = onChange ? onChange(val) : val;
        }, 100);
      }}
      style={{ width: '100%' }}
      {...props}
    />
  );
};
