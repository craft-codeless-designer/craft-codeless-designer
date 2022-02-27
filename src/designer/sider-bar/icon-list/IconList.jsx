import { BorderOutlined, FontSizeOutlined } from '@ant-design/icons';
import { Element, useEditor } from '@craftjs/core';
import { Col, Row } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import ButtonIcon from '../../../assets/button.svg';
import { CButton } from '../../../craft-components/basic/cbutton/CButton';
import { CText } from '../../../craft-components/basic/ctext/CText';
import { CContainer } from '../../../craft-components/custome/ccontainer/CContainer';
import { Icon } from './Icon';

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
export const IconList = () => {
  const { connectors, query } = useEditor();

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
        <Row justify="center" align="middle" gutter={[5, 15]}>
          <Col span={8}>
            <Icon label="Text" icon={<FontSizeOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="Button"
              icon={<img width="40px" height="40px" style={{ padding: 0, margin: 0, pointerEvents: 'none' }} alt="" src={ButtonIcon}></img>}
              component={<CButton text="按钮"></CButton>}
            ></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="Container"
              icon={<BorderOutlined style={{ color: '#fff', fontSize: 40 }} />}
              component={<Element is={CContainer} padding={20} canvas></Element>}
            ></Icon>
          </Col>
        </Row>
      </IconListWrapper>
    </Scrollbars>
  );
};
