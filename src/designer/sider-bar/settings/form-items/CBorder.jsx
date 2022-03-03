import { useNode } from '@craftjs/core';
import { Col, InputNumber, Row, Select } from 'antd';
import React from 'react';
import { CColorPicker } from './CColorPicker';

const { Option } = Select;

/**
 * @class CBorder
 *
 * 用于修改 CSS  的 border 值。
 *
 * NOTE: {border:'1px solid rgba(32,32,32,1)'} 被拆分成了 3 个属性进行存储和操作，避免进行 CSS 字符串解析
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CBorder = ({ onChange, ...props }) => {
  const {
    actions: { setProp },
    borderSize,
    borderType,
  } = useNode(node => {
    return { borderSize: node.data.props['borderSize'], borderType: node.data.props['borderType'] };
  });

  const inputStyle = {
    width: '100%',
  };

  return (
    <Row>
      <Col span={24}>
        <InputNumber
          min={0}
          value={borderSize}
          style={inputStyle}
          onChange={val => {
            setProp(props => {
              props['borderSize'] = onChange ? onChange(val) : val;
            }, 100);
          }}
        />
      </Col>
      <Col span={24}>
        <Select
          defaultValue={borderType}
          value={borderType}
          style={inputStyle}
          onChange={val => {
            setProp(props => {
              props['borderType'] = onChange ? onChange(val) : val;
            }, 100);
          }}
        >
          <Option value="solid">solid</Option>
          <Option value="dashed">dashed</Option>
        </Select>
      </Col>
      <Col span={24}>
        <CColorPicker {...props} propKey="borderColor"></CColorPicker>
      </Col>
    </Row>
  );
};
