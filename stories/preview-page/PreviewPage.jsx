import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { CraftDesigner } from '../../src/designer/CraftDesigner';
import { testPageData } from '../quick-start/test-page-data';

export const PreviewPage = props => {
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
        <h3 style={{ marginTop: '30px' }}>预览页面</h3>
        <ul>
          <li>把 CraftDesigner 的 enabled 设置为 false 会禁用所有编辑功能，此时只展示，不能编辑。</li>
          <li>把 CraftDesigner 的 showNavBar 和 showSiderBar 设置为 false ，将不会渲染顶部的导航条和侧边工具栏。</li>
          <li>关于 Editor 的更多参数，请参考 craftjs 官方文档： https://craft.js.org/docs/api/editor </li>
        </ul>
      </div>
    </>
  );
};
