import { Tabs } from 'antd';
import { IconList } from '../icon-list/IconList';
import { LayersPanel } from '../layers-panel/LayersPanel';
import './SettingsContainer.css';

const { TabPane } = Tabs;

export const SettingsContainer = props => {
  return (
    <div className="settingsContainer">
      <Tabs
        onChange={evt => {
          console.log('change');
        }}
        type="card"
      >
        <TabPane tab="组件" key="1">
          <IconList></IconList>
        </TabPane>
        <TabPane tab="属性" key="2">
          属性配置面板
        </TabPane>
        <TabPane tab="层级" key="3">
          <LayersPanel></LayersPanel>
        </TabPane>
      </Tabs>
    </div>
  );
};
