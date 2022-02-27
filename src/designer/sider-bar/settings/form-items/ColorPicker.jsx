import { SettingOutlined } from '@ant-design/icons';
import { useNode } from '@craftjs/core';
import { Input } from 'antd';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

/**
 * @class ColorPicker
 *
 * 颜色选择器。
 *
 * 用于 Settings 面板中，修改组件的各种属性。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const ColorPicker = props => {
  const { propKey = 'color', onChange } = props;
  //useNode() 钩子可以直接从 EditorContext 上获得当前选中的节点数据
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    console.log(node.data);
    return { propValue: node.data.props[propKey] };
  });
  const [pickerVisable, setPickerVisable] = useState(false);

  return (
    <>
      <Input
        addonAfter={
          <SettingOutlined
            onClick={evt => {
              setPickerVisable(!pickerVisable);
            }}
          ></SettingOutlined>
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
          style={{ display: 'inline-block' }}
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
