import { Tabs } from 'antd';
import styled from 'styled-components';
import { IconList } from './icon-list/IconList';
import { LayersPanel } from './layers-panel/LayersPanel';
import { SettingsContainer } from './settings/settings-container/SettingsContainer';

const { TabPane } = Tabs;
const SiderBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

/**
 * @class SiderBar
 *
 * 侧边栏。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const SiderBar = props => {
  return (
    <SiderBarWrapper>
      <Tabs type="card">
        <TabPane tab="Components" key="1">
          <IconList></IconList>
        </TabPane>
        <TabPane tab="Settings" key="2">
          <SettingsContainer></SettingsContainer>
        </TabPane>
        <TabPane tab="Layers" key="3">
          <LayersPanel></LayersPanel>
        </TabPane>
      </Tabs>
    </SiderBarWrapper>
  );
};
