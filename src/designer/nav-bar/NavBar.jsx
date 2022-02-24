import { useEditor } from '@craftjs/core';
import { Button, Col, Row } from 'antd';
import './NavBar.css';

export const NavBar = props => {
  const { actions, query } = useEditor();

  return (
    <div className="navbar">
      <Row>
        <Col span={12}>
          <span>Logo</span>
        </Col>
        <Col span={12}>
          <Button>Preview</Button>
          <Button>Undo</Button>
          <Button>Redo</Button>
          <Button
            onClick={evt => {
              //保存数据
              const json = query.serialize();
              console.log(json);
              window.localStorage.setItem('test-data', JSON.stringify(json));
            }}
          >
            Save
          </Button>
          <Button
            onClick={evt => {
              //重新加载数据
              const data = props.onLoadData && props.onLoadData(evt);
              console.log(data);
              data && actions.deserialize(data);
            }}
          >
            Load
          </Button>
          <Button>Help</Button>
        </Col>
      </Row>
    </div>
  );
};
