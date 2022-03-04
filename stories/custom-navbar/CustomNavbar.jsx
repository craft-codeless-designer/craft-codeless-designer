import React from 'react';
import { CraftDesigner } from '../../src/designer/CraftDesigner';

export const CustomNavbar = props => {
  return (
    <>
      <h1>隐藏顶部导航条</h1>
      <p>在 CraftDesigner 标签上设置 showNavBar 为 false 可以隐藏导航条。</p>
      <p>&lt;CraftDesigner showNavBar=&#123;false&#125;&gt;</p>
      <CraftDesigner showNavBar={false}></CraftDesigner>
      <h1>自定义顶部导航条</h1>
    </>
  );
};
