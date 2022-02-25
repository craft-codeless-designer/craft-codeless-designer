import { Editor } from '@craftjs/core';
import { Col, Row } from 'antd';
import React from 'react';
import { CButton } from '../craft-components/basic/cbutton/CButton';
import { Container } from '../craft-components/custome/container/Container';
import { CanvasArea } from './canvas-area/CanvasArea';
import { NavBar } from './nav-bar/NavBar';
import { IconList } from './sider-bar/icon-list/IconList';
import { SiderBar } from './sider-bar/SiderBar';

export const CraftDesigner = props => {
  return (
    <Editor resolver={{ CButton, Container, IconList }}>
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
      <Row>
        <Col span={16}>
          <CanvasArea></CanvasArea>
        </Col>
        <Col span={8}>
          <SiderBar></SiderBar>
        </Col>
      </Row>
    </Editor>
  );
};
