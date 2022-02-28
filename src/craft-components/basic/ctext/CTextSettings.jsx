import { Form } from 'antd';
import React from 'react';
import { CColorPicker } from '../../../designer/sider-bar/settings/form-items/CColorPicker';
import { CInputNumber } from '../../../designer/sider-bar/settings/form-items/CInputNumber';
import { CMargin } from '../../../designer/sider-bar/settings/form-items/CMargin';

/**
 * @class CTextSettings
 *
 * CText 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CTextSettings = props => {
  // FIXME:添加更多配置项，margin/padding/font-size/font-weight/align
  return (
    <Form layout="vertical">
      <Form.Item label="Text Color">
        <CColorPicker {...props} propKey="color"></CColorPicker>
      </Form.Item>
      <Form.Item label="Font Size">
        <CInputNumber {...props} propKey="fontSize"></CInputNumber>
      </Form.Item>
      <Form.Item label="Font Weight">
        <CInputNumber {...props} propKey="fontWeight" min={1} max={1000}></CInputNumber>
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
