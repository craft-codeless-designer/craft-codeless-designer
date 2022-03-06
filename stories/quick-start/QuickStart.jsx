import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { CraftDesigner } from '../../src/designer/CraftDesigner';
import { testPageData } from './test-page-data';

export const QuickStart = props => {
  const [pageData, setPageData] = useState('');

  useEffect(() => {
    //TODO:在真实的业务系统中，这里会从 Server 端接口加载页面，参见 craft-codeless-designer-demo 项目。
    setPageData(testPageData);
  }, []);

  return (
    <>
      <CraftDesigner
        enabled={false}
        pageData={pageData}
        onSaveData={jsonStr => {
          //FIXME:handle empty string.
          window.localStorage.setItem('test-data', JSON.stringify(jsonStr));
          message.success('Data saved to window.localStorage.');
        }}
        onLoadData={evt => {
          let testData = window.localStorage.getItem('test-data');
          if (!testData) {
            console.error('There is no data in window.localStorage.');
            return null;
          }
          testData = JSON.parse(testData);
          setPageData(testData);
        }}
      ></CraftDesigner>

      <div>
        <h3 style={{ marginTop: '30px' }}>CraftDesinger 的主要特性：</h3>
        <ul>
          <li>CraftDesinger 可以整体引用，它是一个巨大的 React 组件，所有功能都集成在里面。</li>
          <li>CraftDesinger 由3个区域构成：顶部导航条、主画布区域、右侧边栏。</li>
          <li>内部的组件也可以拆开使用。</li>
          <li>顶部套航条可以隐藏起来，也可以编写自己的导航条。</li>
          <li>侧边栏可以隐藏起来，也可以编写自己的侧边栏。</li>
        </ul>
      </div>
    </>
  );
};
