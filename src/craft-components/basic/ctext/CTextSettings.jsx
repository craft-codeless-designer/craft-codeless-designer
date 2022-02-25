import { useNode } from '@craftjs/core';
import React from 'react';
import { ChromePicker } from 'react-color';

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
