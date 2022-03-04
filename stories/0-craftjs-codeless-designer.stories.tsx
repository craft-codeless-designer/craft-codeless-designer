import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css'; //This file is in node_modules
import React from 'react';
import { CustomComponent } from './custom-component/CustomComponent';
import { CustomNavbar } from './custom-navbar/CustomNavbar';
import { CustomSettings } from './custom-settings/CustomSettings';
import { CustomSiderBar } from './custom-siderbar/CustomSiderbar';
import { QuickStart } from './quick-start/QuickStart';
import { Serialization } from './serialization/Serialization';

storiesOf('Craft-Codeless-Designer', module)
  .add('1.快速上手', () => (
    <React.StrictMode>
      <QuickStart></QuickStart>
    </React.StrictMode>
  ))
  .add('2.自定义组件', () => (
    <React.StrictMode>
      <CustomComponent></CustomComponent>
    </React.StrictMode>
  ))
  .add('3.组件对应的 Settings', () => (
    <React.StrictMode>
      <CustomSettings></CustomSettings>
    </React.StrictMode>
  ))
  .add('4.序列化和加载', () => (
    <React.StrictMode>
      <Serialization></Serialization>
    </React.StrictMode>
  ))
  .add('5.自定义顶部导航', () => (
    <React.StrictMode>
      <CustomNavbar></CustomNavbar>
    </React.StrictMode>
  ))
  .add('6.自定义侧边栏', () => (
    <React.StrictMode>
      <CustomSiderBar></CustomSiderBar>
    </React.StrictMode>
  ))
  .add('7.API', () => (
    <React.StrictMode>
      <CustomSiderBar></CustomSiderBar>
    </React.StrictMode>
  ));
