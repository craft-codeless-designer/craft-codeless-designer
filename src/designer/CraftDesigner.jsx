import { Editor } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import { CButton } from '../craft-components/basic/cbutton/CButton';
import { CText } from '../craft-components/basic/ctext/CText';
import { CColumn } from '../craft-components/layout/ccolumn/CColumn';
import { CRow } from '../craft-components/layout/crow/CRow';
import { RenderNode } from './editor-tools/RenderNode';
import { NavBar } from './nav-bar/NavBar';
import { createCanvasArea, RootCanvasArea } from './root-canvas-area/RootCanvasArea';
import { IconList } from './sider-bar/icon-list/IconList';
import { SiderBar } from './sider-bar/SiderBar';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  padding: 0;
  margin: 0;

  .canvasArea {
    flex: 1;
    background-color: #f7f7f7;
    margin: 0;
  }

  .siderBar {
    width: 300px;
    height: calc(100vh - 44px);
    border-left: 1px solid #f0f0f0;
  }
`;

/**
 * @class CraftDesigner
 *
 * 设计器整体入口。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CraftDesigner = props => {
  return (
    <Editor resolver={{ CButton, CRow, IconList, CText, CColumn, RootCanvasArea }} onRender={RenderNode}>
      <NavBar
        onLoadData={evt => {
          let testData = window.localStorage.getItem('test-data');
          if (!testData) {
            console.error('There is no data in window.localStorage.');
            return null;
          }
          testData = JSON.parse(testData);
          return testData;
        }}
      ></NavBar>
      <MainContainer className="page-container">
        <div className={cx(['canvasArea craftjs-renderer'])}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={50}
            autoHeight
            autoHeightMin={0}
            autoHeightMax={'calc(100vh - 44px)'}
            thumbMinSize={30}
          >
            {createCanvasArea()}
          </Scrollbars>
        </div>
        <div className="siderBar">
          <SiderBar></SiderBar>
        </div>
      </MainContainer>
    </Editor>
  );
};
