import { AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined } from '@ant-design/icons';
import { useNode } from '@craftjs/core';
import { Radio } from 'antd';
import React from 'react';

/**
 * @class CTextAlign
 *
 * 用于修改 CSS  的 text-align 值。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CTextAlign = ({ propKey = 'textAlign', onChange, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    return { propValue: node.data.props[propKey] };
  });

  return (
    <Radio.Group
      onChange={evt => {
        let val = evt.target.value;
        setProp(props => {
          props[propKey] = onChange ? onChange(val) : val;
        }, 100);
      }}
      defaultValue={propValue}
    >
      <Radio.Button value="left">
        <AlignLeftOutlined />
      </Radio.Button>
      <Radio.Button value="center">
        <AlignCenterOutlined />
      </Radio.Button>
      <Radio.Button value="right">
        <AlignRightOutlined />
      </Radio.Button>
    </Radio.Group>
  );
};
