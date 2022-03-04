import {
  AreaChartOutlined,
  FileImageOutlined,
  FileOutlined,
  FontSizeOutlined,
  FormOutlined,
  TableOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { useEditor } from '@craftjs/core';
import { Col, Row } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import ButtonIcon from '../../../assets/button.svg';
import Column1Icon from '../../../assets/column-1.svg';
import RowIcon from '../../../assets/row.svg';
import { CButton } from '../../../craft-components/basic/cbutton/CButton';
import { getIframe } from '../../../craft-components/basic/ciframe/CIframe';
import { getImg } from '../../../craft-components/basic/cimg/CImg';
import { CText } from '../../../craft-components/basic/ctext/CText';
import { getVideo } from '../../../craft-components/basic/cvideo/CVideo';
import { getChart } from '../../../craft-components/cchart/CChart';
import { getColumn } from '../../../craft-components/layout/ccolumn/CColumn';
import { getRow } from '../../../craft-components/layout/crow/CRow';
import { Icon } from './Icon';

const IconListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 10px 0px 15px;
  overflow: hidden;
`;

const iconStyle = { margin: 0, padding: 0, pointerEvents: 'none', color: '#fff', fontSize: 40 };

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
            <Icon label="Text" icon={<FontSizeOutlined style={iconStyle} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Image" icon={<FileImageOutlined style={iconStyle} />} component={getImg()}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Video" icon={<YoutubeOutlined style={iconStyle} />} component={getVideo()}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="IFrame" icon={<FileOutlined style={iconStyle} />} component={getIframe()}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Chart" icon={<AreaChartOutlined style={iconStyle} />} component={getChart()}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Form" icon={<FormOutlined style={iconStyle} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Data Grid" icon={<TableOutlined style={iconStyle} />} component={<CText></CText>}></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="Button"
              icon={<img width="40px" height="40px" style={iconStyle} alt="" src={ButtonIcon}></img>}
              component={<CButton text="按钮"></CButton>}
            ></Icon>
          </Col>
          <Col span={8}>
            <Icon label="Row" icon={<img width="40px" height="40px" style={iconStyle} alt="" src={RowIcon}></img>} component={getRow()}></Icon>
          </Col>
          <Col span={8}>
            <Icon
              label="1 Column"
              icon={<img width="40px" height="40px" style={iconStyle} alt="" src={Column1Icon}></img>}
              component={getColumn()}
            ></Icon>
          </Col>
        </Row>
      </IconListWrapper>
    </Scrollbars>
  );
};
