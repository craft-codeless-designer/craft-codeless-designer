import { Element, useEditor } from '@craftjs/core';
import { Button, Row } from 'antd';
import { MyButton } from '../../../craft-components/custome/button/Button';
import { Container } from '../../../craft-components/custome/container/Container';
import './IconList.css';

export const IconList = () => {
  const { connectors, query } = useEditor();

  return (
    <div className="icon-list">
      <Row>
        <Button ref={ref => connectors.create(ref, <MyButton text="按钮"></MyButton>)}>Button</Button>
        <Button ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas></Element>)}>Container</Button>
      </Row>
    </div>
  );
};
