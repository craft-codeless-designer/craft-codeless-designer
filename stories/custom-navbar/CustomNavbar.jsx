import React from 'react';
import { CraftDesigner } from '../../src/designer/CraftDesigner';

export const CustomNavbar = props => {
  return (
    <>
      <h1>自定义顶部导航条</h1>
      <h3>1.隐藏顶部导航条</h3>
      <p>在 CraftDesigner 标签上设置 showNavBar 为 false 可以隐藏导航条（不是隐藏状态，而是完全不渲染组件）。</p>
      <p>&lt;CraftDesigner showNavBar=&#123;false&#125;&gt;</p>
      <br></br>
      <br></br>
      <CraftDesigner showNavBar={false}></CraftDesigner>
      <br></br>
      <br></br>
      <h3>2.自定义顶部导航条</h3>
      <p>
        请参考 CraftDesigner 内置的 NavBar 组件的写法，自己编写导航条，然后与设计器整合起来使用，
        https://github.com/craft-codeless-designer/craft-codeless-designer
      </p>
    </>
  );
};
