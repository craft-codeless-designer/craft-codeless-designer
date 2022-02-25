import { Tabs } from 'antd';
import { IconList } from './icon-list/IconList';
import { LayersPanel } from './layers-panel/LayersPanel';
import { SettingsContainer } from './settings-container/SettingsContainer';
import './SiderBar.css';

const { TabPane } = Tabs;

export const SiderBar = props => {
  return (
    <div className="siderBar">
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
          <SettingsContainer></SettingsContainer>
        </TabPane>
        <TabPane tab="层级" key="3">
          <LayersPanel></LayersPanel>
        </TabPane>
      </Tabs>
    </div>
  );
};
