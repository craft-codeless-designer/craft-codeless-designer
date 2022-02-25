import { useNode } from '@craftjs/core';
import React from 'react';
import { ChromePicker } from 'react-color';

/**
 * @class CTextSettings
 *
 * CText 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CTextSettings = ({ propKey = 'color', index, onChange, value, prefix, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => ({
    propValue: node.data.props[propKey],
  }));

  value = Array.isArray(propValue) ? propValue[index] : propValue;

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <ChromePicker
        color={value}
        onChange={color => {
          setProp(props => {
            if (Array.isArray(propValue)) {
              props[propKey][index] = onChange ? onChange(color) : color;
            } else {
              props[propKey] = onChange ? onChange(color) : color;
            }
          }, 500);
        }}
      />
    </div>
  );
};
