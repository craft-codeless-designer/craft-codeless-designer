import { Editor } from '@craftjs/core';
import { Col, Row } from 'antd';
import React from 'react';
import { MyButton } from '../craft-components/custome/button/Button';
import { Container } from '../craft-components/custome/container/Container';
import { CanvasArea } from './canvas-area/CanvasArea';
import { NavBar } from './nav-bar/NavBar';
import { IconList } from './settings-panel/icon-list/IconList';
import { SettingsContainer } from './settings-panel/settings-container/SettingsContainer';

export const CraftDesigner = props => {
  return (
    <Editor resolver={{ MyButton, Container, IconList }}>
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
          <SettingsContainer></SettingsContainer>
        </Col>
      </Row>
    </Editor>
  );
};
