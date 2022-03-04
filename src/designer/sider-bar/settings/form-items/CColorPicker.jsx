import { SkinFilled } from '@ant-design/icons';
import { useNode } from '@craftjs/core';
import { Input } from 'antd';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

/**
 * @class CColorPicker
 *
 * 颜色选择器。
 *
 * 用于 Settings 面板中，修改组件的各种属性。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CColorPicker = ({ propKey = 'color', onChange, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    return { propValue: node.data.props[propKey] };
  });
  const [pickerVisable, setPickerVisable] = useState(false);

  return (
    <>
      <Input
        addonAfter={
          <SkinFilled
            style={{
              color: `rgba(${Object.values(propValue)})`,
            }}
            onClick={evt => {
              setPickerVisable(!pickerVisable);
            }}
          ></SkinFilled>
        }
        value={`rgba(${Object.values(propValue)})`}
        onFocus={evt => {
          setPickerVisable(true);
        }}
        {...props}
      />
      {pickerVisable ? (
        <div
          tabIndex="0"
          hidefocus="true"
          onFocus={evt => {
            //do something onfucus...
          }}
          onBlur={evt => {
            setPickerVisable(false);
          }}
          style={{
            position: 'fixed',
            zIndex: 9999,
          }}
        >
          <ChromePicker
            color={propValue}
            onChange={color => {
              let rgb = color.rgb;
              setProp(props => {
                props[propKey] = onChange ? onChange(rgb) : rgb;
              }, 100);
            }}
            {...props}
          />
        </div>
      ) : null}
    </>
  );
};
