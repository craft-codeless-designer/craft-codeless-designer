import { Form } from 'antd';
import React from 'react';
import { CBorder } from '../../src/designer/sider-bar/settings/form-items/CBorder';
import { CColorPicker } from '../../src/designer/sider-bar/settings/form-items/CColorPicker';
import { CMargin } from '../../src/designer/sider-bar/settings/form-items/CMargin';

/**
 * @class CMyComponentSettings
 *
 * MyComponent 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CMyComponentSettings = props => {
  return (
    <Form layout="vertical">
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
    </Form>
  );
};
