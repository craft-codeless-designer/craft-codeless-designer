import React from 'react';
import { CColorPicker } from '../../../designer/sider-bar/settings/form-items/CColorPicker';
import { CInputNumber } from '../../../designer/sider-bar/settings/form-items/CInputNumber';

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
    <>
      <CColorPicker {...props} propKey="color"></CColorPicker>
      <CInputNumber {...props} propKey="fontSize"></CInputNumber>
      <CInputNumber {...props} propKey="fontWeight" min={1} max={1000}></CInputNumber>
    </>
  );
};
