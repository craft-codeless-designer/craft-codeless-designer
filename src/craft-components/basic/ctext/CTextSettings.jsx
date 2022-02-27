import React from 'react';
import { ColorPicker } from '../../../designer/sider-bar/settings/form-items/ColorPicker';

/**
 * @class CTextSettings
 *
 * CText 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CTextSettings = props => {
  console.log(JSON.stringify(props));
  return (
    <ColorPicker {...props}></ColorPicker>
    // FIXME:添加更多配置项，margin/padding/font-size/font-weight/align
  );
};
