import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CraftDesigner } from '../../src/designer/CraftDesigner';
import { testPageData } from './test-page-data';

const doc = `
# 💾存储和加载页面
- 请点击右上角的保存和加载按钮测试存储和加载功能。
- Craft 会把页面序列化成 JSON 数据。           
- 此例子中的数据被存储在 window.localStorage 中，在真实的业务系统中，可以把这份 JSON 数据保存到数据库。 带服务端接口的示例请参考： https://github.com/craft-codeless-designer/craft-codeless-designer-demo
- 序列化和反序列化功能是由 useEditor() 钩子返回的 actions 对象提供的，细节参数请参考官方的文档：https://craft.js.org/docs/api/useEditor`;

export const SaveAndLoad = props => {
  const [pageData, setPageData] = useState('');

  useEffect(() => {
    //TODO:在真实的业务系统中，这里会从 Server 端接口加载页面，参见 craft-codeless-designer-demo 项目。
    setPageData(testPageData);
  }, []);

  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc}></ReactMarkdown>
      <br></br>
      {/* CraftDesigner 自身是一个普通的 React 组件，它的用法与普通的 React 组件没有差异，只是它的外观和功能比较复杂。 */}
      <CraftDesigner
        pageData={pageData} // 传递初始数据，格式为 JSON
        //点击顶部导航条上的保存按钮时，会回调此函数
        onSaveData={jsonStr => {
          //FIXME:handle empty string.
          window.localStorage.setItem('test-data', JSON.stringify(jsonStr));
          message.success('Data saved to window.localStorage.');
        }}
        //点击顶部导航条上的加载按钮时，会回调此函数
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
    </>
  );
};
