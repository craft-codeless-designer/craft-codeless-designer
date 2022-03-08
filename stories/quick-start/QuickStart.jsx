import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import remarkGfm from 'remark-gfm';
import { CraftDesigner } from '../../src/designer/CraftDesigner';
import { testPageData } from './test-page-data';

const doc = `# 🚀快速上手
## 1.CraftDesinger 的主要特性
- &lt;CraftDesinger&gt; 是最核心的组件。
- &lt;CraftDesinger&gt; 是一个普通的 React 组件，只是功能比较复杂，所有编辑功能都集成在这个组件里面。           
- &lt;CraftDesinger&gt; 由3个区域构成：顶部导航条、主画布区域、右侧边栏。 
- &lt;CraftDesinger&gt; 可以像一个普通的 React 组件一样被嵌入在任意组件中，但是由于它的功能比较复杂，建议弹出新的浏览器窗口来使用它。完整带服务端接口的示例项目： https://github.com/craft-codeless-designer/craft-codeless-designer-demo
- 内部的组件也可以拆开使用。 
- 顶部套航条可以隐藏起来，也可以编写自己的导航条。 
- 侧边栏可以隐藏起来，也可以编写自己的侧边栏。`;

const jscode = `## 2.此例子的代码

~~~js
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
~~~

源代码： https://github.com/craft-codeless-designer/craft-codeless-designer 
`;

export const QuickStart = props => {
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
      <br></br>
    </>
  );
};
