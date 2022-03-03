import { Form } from 'antd';
import React from 'react';
import { CMargin } from '../../../designer/sider-bar/settings/form-items/CMargin';

/**
 * @class CRowSettings
 *
 * CRow 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CRowSettings = props => {
  return (
    <Form layout="vertical">
      <Form.Item label="Margin">
        <CMargin {...props} propKey="margin"></CMargin>
      </Form.Item>
      <Form.Item label="Padding">
        <CMargin {...props} propKey="padding"></CMargin>
      </Form.Item>
    </Form>
  );
};
