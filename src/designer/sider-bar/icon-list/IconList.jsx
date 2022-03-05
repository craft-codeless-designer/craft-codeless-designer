import { Col, Row } from 'antd';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import { defaultIconList } from './default-icon-list';

const IconListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 10px 0px 15px;
  overflow: hidden;
`;

/**
 * @class IconList
 *
 * 侧边栏图标列表。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const IconList = props => {
  const { iconList = defaultIconList } = props;

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={50}
      autoHeight
      autoHeightMin={0}
      autoHeightMax={'calc(100vh - 44px)'}
      thumbMinSize={30}
    >
      <IconListWrapper>
        <Row align="middle" gutter={[5, 15]}>
          {iconList.map((icon, index) => (
            <Col key={`col-${index}`} span={8}>
              {icon}
            </Col>
          ))}
        </Row>
      </IconListWrapper>
    </Scrollbars>
  );
};
