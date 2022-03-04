import React from 'react';
import { CraftDesigner } from '../../src/designer/CraftDesigner';

export const CustomSiderBar = props => {
  return (
    <>
      <h1>隐藏侧边栏</h1>
      <p>在 CraftDesigner 标签上设置 showSiderBar 为 false 可以隐藏侧边栏。</p>
      <p>&lt;CraftDesigner showSiderBar=&#123;false&#125;&gt;</p>
      <CraftDesigner showSiderBar={false}></CraftDesigner>
      <h1>自定义侧边栏</h1>
    </>
  );
};
