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
  background-color: #cfdaf0;

  /* override antd default tab styles */
  /* FIXME:refactor the css using LESS */
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    position: relative;
    display: flex;
    transition: transform 0.3s;
    width: 100%;
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    margin: 0;
    padding: 8px 16px;
    background: #696185;
    border: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #f7f7f7;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
    border-radius: 0;
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active {
    color: #fff;
    background: #847ca3;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff;
    text-shadow: 0 0 0.25px currentcolor;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
    margin: 0px;
  }
  .ant-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    flex: 1;
    justify-content: center;
  }
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
      <Tabs type="card" centered>
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
