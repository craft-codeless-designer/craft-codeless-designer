import { AreaChartOutlined, FileImageOutlined, FileOutlined, FontSizeOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Element } from '@craftjs/core';
import React from 'react';
import ButtonIcon from '../../../assets/button.svg';
import Column1Icon from '../../../assets/column-1.svg';
import RowIcon from '../../../assets/row.svg';
import { CButton } from '../../../craft-components/basic/cbutton/CButton';
import { CIframe } from '../../../craft-components/basic/ciframe/CIframe';
import { CImg } from '../../../craft-components/basic/cimg/CImg';
import { CText } from '../../../craft-components/basic/ctext/CText';
import { CVideo } from '../../../craft-components/basic/cvideo/CVideo';
import { CChart } from '../../../craft-components/cchart/CChart';
import { CColumn } from '../../../craft-components/layout/ccolumn/CColumn';
import { CRow } from '../../../craft-components/layout/crow/CRow';
import { Icon } from './Icon';

//图标的默认样式
export const iconStyle = { margin: 0, padding: 0, pointerEvents: 'none', color: '#fff', fontSize: 40 };

/**
 * 组件对应的图标列表
 * 关于 Element 组件的用法，参见官方文档：https://craft.js.org/docs/api/element
 */
export const defaultIconList = [
  <Icon label="Text" icon={<FontSizeOutlined style={iconStyle} />} component={<CText></CText>}></Icon>,
  <Icon label="Image" icon={<FileImageOutlined style={iconStyle} />} component={<Element is={CImg} canvas></Element>}></Icon>,
  <Icon label="Video" icon={<YoutubeOutlined style={iconStyle} />} component={<Element is={CVideo} canvas></Element>}></Icon>,
  <Icon label="IFrame" icon={<FileOutlined style={iconStyle} />} component={<Element is={CIframe} canvas></Element>}></Icon>,
  <Icon label="Chart" icon={<AreaChartOutlined style={iconStyle} />} component={<Element is={CChart} canvas></Element>}></Icon>,
  <Icon
    label="Button"
    icon={<img width="40px" height="40px" style={iconStyle} alt="" src={ButtonIcon}></img>}
    component={<CButton text="按钮"></CButton>}
  ></Icon>,
  <Icon
    label="Row"
    icon={<img width="40px" height="40px" style={iconStyle} alt="" src={RowIcon}></img>}
    component={<Element is={CRow} canvas></Element>}
  ></Icon>,
  <Icon
    label="1 Column"
    icon={<img width="40px" height="40px" style={iconStyle} alt="" src={Column1Icon}></img>}
    component={<Element is={CColumn} canvas></Element>}
  ></Icon>,
];
