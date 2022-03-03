import { BarChartOutlined, FileImageOutlined, FontSizeOutlined, FormOutlined, TableOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Element, useEditor } from '@craftjs/core';
import { Col, Row } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import ButtonIcon from '../../../assets/button.svg';
import Column1Icon from '../../../assets/column-1.svg';
import Column2Icon from '../../../assets/column-2.svg';
import Column3Icon from '../../../assets/column-3.svg';
import RowIcon from '../../../assets/row.svg';
import { CButton } from '../../../craft-components/basic/cbutton/CButton';
import { CText } from '../../../craft-components/basic/ctext/CText';
import { CColumn } from '../../../craft-components/layout/ccolumn/CColumn';
import { CRow, nestedRow } from '../../../craft-components/layout/crow/CRow';
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
        <Row align="middle" gutter={[5, 15]}>
          <Col span={8}>
            <Icon label="Text" icon={<FontSizeOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Image" icon={<FileImageOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Video" icon={<YoutubeOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Chart" icon={<BarChartOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Form" icon={<FormOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Data Grid" icon={<TableOutlined style={{ color: '#fff', fontSize: 40 }} />} component={<CText></CText>}></Icon>
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
              label="Row"
              icon={<img width="40px" height="40px" style={{ padding: 0, margin: 0, pointerEvents: 'none' }} alt="" src={RowIcon}></img>}
              component={nestedRow()}
            ></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="1 Column"
              icon={<img width="40px" height="40px" style={{ padding: 0, margin: 0, pointerEvents: 'none' }} alt="" src={Column1Icon}></img>}
              component={<Element is={CColumn} canvas></Element>}
            ></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="2 Columns"
              icon={<img width="40px" height="40px" style={{ padding: 0, margin: 0, pointerEvents: 'none' }} alt="" src={Column2Icon}></img>}
              component={<Element is={CRow} canvas></Element>}
            ></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="3 Columns"
              icon={<img width="40px" height="40px" style={{ padding: 0, margin: 0, pointerEvents: 'none' }} alt="" src={Column3Icon}></img>}
              component={<Element is={CRow} canvas></Element>}
            ></Icon>
          </Col>
        </Row>
      </IconListWrapper>
    </Scrollbars>
  );
};
