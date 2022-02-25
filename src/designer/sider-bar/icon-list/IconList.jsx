import { Element, useEditor } from '@craftjs/core';
import { Button, Row } from 'antd';
import styled from 'styled-components';
import { CButton } from '../../../craft-components/basic/cbutton/CButton';
import { CText } from '../../../craft-components/basic/ctext/CText';
import { CContainer } from '../../../craft-components/custome/ccontainer/CContainer';

const IconListWrapper = styled.div`
  padding: 5px;
`;

/**
 * @class IconList
 *
 * 可拖拽的组件图标。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const IconList = () => {
  const { connectors, query } = useEditor();

  return (
    <IconListWrapper>
      <Row>
        <Button ref={ref => connectors.create(ref, <CText></CText>)}>Text</Button>
        <Button ref={ref => connectors.create(ref, <CButton text="按钮"></CButton>)}>Button</Button>
        <Button ref={ref => connectors.create(ref, <Element is={CContainer} padding={20} canvas></Element>)}>Container</Button>
      </Row>
    </IconListWrapper>
  );
};
