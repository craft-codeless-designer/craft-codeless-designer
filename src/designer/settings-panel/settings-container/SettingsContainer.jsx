import { Col, Row } from 'antd';
import { IconList } from '../icon-list/IconList';

export const SettingsContainer = props => {
  return (
    <>
      <Row>
        <Col span={24}>
          <IconList></IconList>
        </Col>
      </Row>
      <Row>
        <Col span={24}>配置面板</Col>
      </Row>
    </>
  );
};
