import { useNode } from '@craftjs/core';
import { Col, InputNumber, Row } from 'antd';
import React from 'react';

/**
 * @class CMargin
 *
 * 用于修改 CSS  的 margin 值。
 *
 * 用于 Settings 面板中，修改组件的各种属性。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CMargin = ({ propKey = 'margin', onChange, ...props }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode(node => {
    return { propValue: node.data.props[propKey] };
  });

  const labelStyle = {
    width: '50px',
    display: 'inline-block',
    fontSize: '12px',
    padding: '4px',
    textAlign: 'right',
  };

  const numberInputStyle = {
    width: '80px',
  };

  return (
    <Row>
      <Col span={12}>
        <span style={labelStyle}>top</span>
        <InputNumber
          min={0}
          value={propValue[0]}
          style={numberInputStyle}
          onChange={val => {
            setProp(props => {
              props[propKey][0] = onChange ? onChange(val) : val;
            }, 100);
          }}
        />
      </Col>
      <Col span={12}>
        <span style={labelStyle}>right</span>
        <InputNumber
          min={0}
          value={propValue[1]}
          style={numberInputStyle}
          onChange={val => {
            setProp(props => {
              props[propKey][1] = onChange ? onChange(val) : val;
            }, 100);
          }}
        />
      </Col>
      <Col span={12}>
        <span style={labelStyle}>bottom</span>
        <InputNumber
          min={0}
          value={propValue[2]}
          style={numberInputStyle}
          onChange={val => {
            setProp(props => {
              props[propKey][2] = onChange ? onChange(val) : val;
            }, 100);
          }}
        />
      </Col>
      <Col span={12}>
        <span style={labelStyle}>left</span>
        <InputNumber
          min={0}
          value={propValue[3]}
          style={numberInputStyle}
          onChange={val => {
            setProp(props => {
              props[propKey][3] = onChange ? onChange(val) : val;
            }, 100);
          }}
        />
      </Col>
    </Row>
  );
};
