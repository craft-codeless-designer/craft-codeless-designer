import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css'; //This file is in node_modules
import React from 'react';
import { API } from './api/API';
import { CustomComponent } from './custom-component/CustomComponent';
import { CustomNavbar } from './custom-navbar/CustomNavbar';
import { CustomSettings } from './custom-settings/CustomSettings';
import { CustomSiderBar } from './custom-siderbar/CustomSiderbar';
import { PreviewPage } from './preview-page/PreviewPage';
import { QuickStart } from './quick-start/QuickStart';
import { SaveAndLoad } from './save-and-load/SaveAndLoad';

storiesOf('Craft-Codeless-Designer', module)
  .add('1.快速上手', () => (
    <React.StrictMode>
      <QuickStart></QuickStart>
    </React.StrictMode>
  ))
  .add('2.预览页面', () => (
    <React.StrictMode>
      <PreviewPage></PreviewPage>
    </React.StrictMode>
  ))
  .add('3.自定义组件', () => (
    <React.StrictMode>
      <CustomComponent></CustomComponent>
    </React.StrictMode>
  ))
  .add('4.组件对应的 Settings', () => (
    <React.StrictMode>
      <CustomSettings></CustomSettings>
    </React.StrictMode>
  ))
  .add('5.存储和加载页面', () => (
    <React.StrictMode>
      <SaveAndLoad></SaveAndLoad>
    </React.StrictMode>
  ))
  .add('6.自定义顶部导航', () => (
    <React.StrictMode>
      <CustomNavbar></CustomNavbar>
    </React.StrictMode>
  ))
  .add('7.自定义侧边工具栏', () => (
    <React.StrictMode>
      <CustomSiderBar></CustomSiderBar>
    </React.StrictMode>
  ))
  .add('8.API', () => (
    <React.StrictMode>
      <API></API>
    </React.StrictMode>
  ));
