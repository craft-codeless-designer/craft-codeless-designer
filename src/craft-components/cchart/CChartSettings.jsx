import { Form } from 'antd';
import React from 'react';
import { CBorder } from '../../designer/sider-bar/settings/form-items/CBorder';
import { CColorPicker } from '../../designer/sider-bar/settings/form-items/CColorPicker';
import { CInputNumber } from '../../designer/sider-bar/settings/form-items/CInputNumber';
import { CMargin } from '../../designer/sider-bar/settings/form-items/CMargin';
import { CTextArea } from '../../designer/sider-bar/settings/form-items/CTextArea';

/**
 * @class CChartSettings
 *
 * CChart 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CChartSettings = props => {
  return (
    <Form layout="vertical">
      <Form.Item label="Height">
        <CInputNumber {...props} propKey="height" min={0} max={100000}></CInputNumber>
      </Form.Item>
      <Form.Item label="Minimum Height">
        <CInputNumber {...props} propKey="minHeight" min={1} max={100000}></CInputNumber>
      </Form.Item>
      <Form.Item label="Width">
        <CInputNumber {...props} propKey="width" min={-1} max={100000}></CInputNumber>
      </Form.Item>
      <Form.Item label="Border">
        <CBorder {...props} propKey="border"></CBorder>
      </Form.Item>
      <Form.Item label="Background Color">
        <CColorPicker {...props} propKey="bgColor"></CColorPicker>
      </Form.Item>
      <Form.Item label="Margin">
        <CMargin {...props} propKey="margin"></CMargin>
      </Form.Item>
      <Form.Item label="Padding">
        <CMargin {...props} propKey="padding"></CMargin>
      </Form.Item>
      <Form.Item label="Chart Options @see https://echarts.apache.org/">
        <CTextArea {...props} propKey="chartOptions"></CTextArea>
      </Form.Item>
    </Form>
  );
};
