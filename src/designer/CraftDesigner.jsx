import { Editor, Element, Frame } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import { CButton } from '../craft-components/basic/cbutton/CButton';
import { CIframe } from '../craft-components/basic/ciframe/CIframe';
import { CImg } from '../craft-components/basic/cimg/CImg';
import { CText } from '../craft-components/basic/ctext/CText';
import { CVideo } from '../craft-components/basic/cvideo/CVideo';
import { CChart } from '../craft-components/cchart/CChart';
import { CColumn } from '../craft-components/layout/ccolumn/CColumn';
import { CRow } from '../craft-components/layout/crow/CRow';
import { RenderNode } from './editor-tools/RenderNode';
import { NavBar } from './nav-bar/NavBar';
import { RootCanvasArea } from './root-canvas-area/RootCanvasArea';
import { defaultIconList } from './sider-bar/icon-list/default-icon-list';
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

const emptyFn = () => {};
export const defaultComponentTypes = {
  Element,
  RootCanvasArea,
  CButton,
  CRow,
  IconList,
  CText,
  CColumn,
  CImg,
  CVideo,
  CIframe,
  CChart,
};

/**
 * @class CraftDesigner
 *
 * 设计器整体入口。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CraftDesigner = props => {
  const {
    onPreview = emptyFn,
    onDelete = emptyFn,
    onUndo = emptyFn,
    onRedo = emptyFn,
    onSaveData = emptyFn,
    onLoadData = emptyFn,
    onHelp = emptyFn,
    showNavBar = true,
    showSiderBar = true,
    componentTypes = { ...defaultComponentTypes },
    iconList = defaultIconList,
    pageData = '',
  } = props;

  return (
    <Editor resolver={componentTypes} onRender={RenderNode}>
      {showNavBar ? (
        <NavBar
          onPreview={onPreview}
          onDelete={onDelete}
          onUndo={onUndo}
          onRedo={onRedo}
          onSaveData={onSaveData}
          onLoadData={onLoadData}
          onHelp={onHelp}
        ></NavBar>
      ) : (
        ''
      )}
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
            <Frame>
              <Element is={RootCanvasArea} canvas pageData={pageData}></Element>
            </Frame>
          </Scrollbars>
        </div>
        {showSiderBar ? (
          <div className="siderBar">
            <SiderBar iconList={iconList}></SiderBar>
          </div>
        ) : (
          ''
        )}
      </MainContainer>
    </Editor>
  );
};
