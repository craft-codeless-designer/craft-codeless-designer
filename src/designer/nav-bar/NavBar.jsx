import {
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
  GithubOutlined,
  QuestionCircleOutlined,
  RedoOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { useEditor } from '@craftjs/core';
import { Button, Col, message, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CCDIcon from '../../assets/ccd-icon.svg';

const NavBarWrapper = styled.div`
  border: none;
  height: 44px;
  overflow: hidden;
  width: 100vw;
  line-height: 44px;
  padding: 0px 15px;
  background: #261c2c;
  color: #f7f7f7;

  a {
    img {
      width: 60px;
      margin-top: -8px;
      margin-left: -15px;
    }
  }

  span {
    font-size: 18px;
    color: #fff;
  }

  .versionText {
    position: absolute;
    font-size: 10px;
    padding: 2px;
    border-radius: 0;
    left: 246px;
    top: 17px;
    height: 16px;
    line-height: 12px;
    text-align: center;
    font-weight: bold;
  }

  .buttonGroup {
    button {
      background: #3e2c41;
      color: #fff;
      border: none;
      border-radius: 0;
    }
  }
`;

const iconStyle = { color: '#fff' };

/**
 * @class NavBar
 *
 * The navigation bar at the top of the designer.
 *
 * Callbacks on the props:
 *
 * - onPreview(evt)
 * - onDelete(evt)
 * - onUndo(evt)
 * - onRedo(evt)
 * - onSaveData(jsonStr)
 * - onLoadData(evt)
 * - onHelp()
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const NavBar = props => {
  const { query } = useEditor();
  const { onPreview, onDelete, onUndo, onRedo, onSaveData, onLoadData, onHelp } = props;

  return (
    <NavBarWrapper>
      <Row>
        <Col span={12} style={{ textAlign: 'left' }}>
          <a href="#">
            <img src={CCDIcon}></img>
          </a>
          <span>Craft Codeless Designer</span>
          <div className="versionText">v1.0.3</div>
        </Col>
        <Col span={12} style={{ textAlign: 'end' }}>
          <Button.Group className="buttonGroup">
            <Button
              title="Preview the page."
              icon={
                <EyeOutlined
                  style={iconStyle}
                  onClick={evt => {
                    try {
                      onPreview && onPreview(evt);
                    } catch (error) {
                      console.error(error);
                      message.error(error);
                    }
                  }}
                />
              }
            ></Button>
            <Button
              title="Delete, hit Delete key."
              icon={
                <DeleteOutlined
                  style={iconStyle}
                  onClick={evt => {
                    try {
                      onDelete && onDelete(evt);
                    } catch (error) {
                      console.error(error);
                      message.error(error);
                    }
                  }}
                />
              }
            />
            <Button
              title="Undo"
              icon={
                <UndoOutlined
                  style={iconStyle}
                  onClick={evt => {
                    try {
                      onUndo && onUndo(evt);
                    } catch (error) {
                      console.error(error);
                      message.error(error);
                    }
                  }}
                />
              }
            ></Button>
            <Button
              title="Redo"
              icon={
                <RedoOutlined
                  style={iconStyle}
                  onClick={evt => {
                    try {
                      onRedo && onRedo(evt);
                    } catch (error) {
                      console.error(error);
                      message.error(error);
                    }
                  }}
                />
              }
            ></Button>
            <Button
              title="Save"
              icon={<SaveOutlined style={iconStyle} />}
              onClick={evt => {
                try {
                  const jsonStr = query.serialize();
                  console.log(jsonStr);
                  onSaveData && onSaveData(jsonStr);
                } catch (error) {
                  console.error(error);
                  message.error(error);
                }
              }}
            ></Button>
            <Button
              title="Load"
              icon={<DownloadOutlined style={iconStyle} />}
              onClick={evt => {
                try {
                  onLoadData && onLoadData(evt);
                } catch (error) {
                  console.error(error);
                  message.error(error);
                }
              }}
            ></Button>
            <Button
              title="Help"
              icon={
                <QuestionCircleOutlined
                  style={iconStyle}
                  onClick={evt => {
                    try {
                      onHelp && onHelp(evt);
                    } catch (error) {
                      console.error(error);
                      message.error(error);
                    }
                  }}
                />
              }
            ></Button>
            <Button
              title="Github"
              icon={<GithubOutlined style={iconStyle} />}
              onClick={evt => {
                window.open('https://github.com/craft-codeless-designer/craft-codeless-designer', '_blank');
              }}
            ></Button>
          </Button.Group>
        </Col>
      </Row>
    </NavBarWrapper>
  );
};
