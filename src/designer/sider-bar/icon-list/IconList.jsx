import { Element, useEditor } from '@craftjs/core';
import { Button, Row } from 'antd';
import { CButton } from '../../../craft-components/basic/cbutton/CButton';
import { Container } from '../../../craft-components/custome/container/Container';
import './IconList.css';

export const IconList = () => {
  const { connectors, query } = useEditor();

  return (
    <div className="icon-list">
      <Row>
        <Button ref={ref => connectors.create(ref, <CButton text="按钮"></CButton>)}>Button</Button>
        <Button ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas></Element>)}>Container</Button>
      </Row>
    </div>
  );
};
