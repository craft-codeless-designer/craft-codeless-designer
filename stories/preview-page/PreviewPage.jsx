import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import remarkGfm from 'remark-gfm';
import { CraftDesigner } from '../../src/designer/CraftDesigner';
import { testPageData } from '../quick-start/test-page-data';

const doc = `# 👨‍💻预览页面
## 1.注意点
- 把 CraftDesigner 的 enabled 设置为 false 会禁用所有编辑功能，此时只展示，不能编辑。          
- 把 CraftDesigner 的 showNavBar 和 showSiderBar 设置为 false ，将不会渲染顶部的导航条和侧边工具栏。
- 关于 Editor 的更多参数，请参考 craftjs 官方文档： https://craft.js.org/docs/api/editor `;

const jscode = `# 2.此例子的代码

~~~js
export const PreviewPage = props => {
  const [pageData, setPageData] = useState('');

  useEffect(() => {
    //TODO:在真实的业务系统中，这里会从 Server 端接口加载页面，参见 craft-codeless-designer-demo 项目。
    setPageData(testPageData);
  }, []);

  return (
    <>
      <CraftDesigner
        enabled={false} //enabled 设置为 false ，可以禁用所有编辑功能，此时仅仅渲染出页面。
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
~~~
`;

export const PreviewPage = props => {
  const [pageData, setPageData] = useState('');

  useEffect(() => {
    //TODO:在真实的业务系统中，这里会从 Server 端接口加载页面，参见 craft-codeless-designer-demo 项目。
    setPageData(testPageData);
  }, []);

  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc}></ReactMarkdown>
      <br></br>
      <CraftDesigner
        enabled={false} //enabled 设置为 false ，可以禁用所有编辑功能，此时仅仅渲染出页面。
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
      <br></br>
      <ReactMarkdown
        children={jscode}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter children={String(children).replace(/\n$/, '')} style={dark} language={match[1]} PreTag="div" {...props} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
};
