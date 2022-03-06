import { UnorderedListOutlined } from '@ant-design/icons';
import { Element } from '@craftjs/core';
import { message } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import remarkGfm from 'remark-gfm';
import { CraftDesigner, defaultComponentTypes } from '../../src/designer/CraftDesigner';
import { defaultIconList, iconStyle } from '../../src/designer/sider-bar/icon-list/default-icon-list';
import { Icon } from '../../src/designer/sider-bar/icon-list/Icon';
import { CMyComponent } from './CMyComponent';

const doc1 = `
# 自定义组件
## 1.自定义组件的步骤：
- 第一步：编写一个普通的 React 组件，或者引入开源组件库中的组件。
- 第二步：编写一个 Craft 包装组件，用来包装普通的 React 组件，并暴露给 Editor。
- 第三步：给组件编写一个可拖拽的图标。
- 第四步：给组件编写对应的配置Panel。

**此文档描述第一步到第三步，第四步在下一节单独描述。**
`;

const doc2 = `
## 2.运行效果（右侧列表中的 MyComponent 是自定义组件)：
`;

const jscode1 = `# 3.MyComponent 组件的代码：

~~~js
import { Card } from 'antd';
import React from 'react';

/**
 * 与编写普通的 React 组件完全一致。
 *
 * @param {*} props
 * @returns
 */
export const MyComponent = props => {
  return (
    <>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};
~~~
`;

const jscode2 = `# 4.包装组件 CMyComponent 的代码：

~~~js
import { useNode } from '@craftjs/core';
import React from 'react';
import { MyComponent } from './MyComponent';

const defaultProps = {
  minHeight: 40,
  margin: [0, 0, 0, 0],
  padding: [10, 10, 10, 10],
  //NOTE: {border:'1px solid rgba(32,32,32,1)'} 被拆分成了 3 个属性进行存储和操作，避免进行 CSS 字符串解析
  borderSize: 1,
  borderType: 'solid',
  borderColor: { r: 32, g: 32, b: 32, a: 1 },
  display: 'flex',
  bgColor: { r: 200, g: 200, b: 200, a: 1 },
};

/**
 * @class CMyComponent
 *
 * 写一个包装组件来包装 MyComponent 组件，一般用 C 作为前缀，表示这是一个 Craft 包装组件。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CMyComponent = props => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { minHeight, margin, padding, borderSize, borderType, borderColor, bgColor, display, children } = props;
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      // 这里需要根据 props 中传递的参数重新拼接 CSS 样式
      style={{
        margin: \`\${margin[0]}px \${margin[1]}px \${margin[2]}px \${margin[3]}px\`,
        padding: \`\${padding[0]}px \${padding[1]}px \${padding[2]}px \${padding[3]}px\`,
        border: \`\${borderSize}px \${borderType} rgba(\${Object.values(borderColor)})\`,
        minHeight: \`\${minHeight}px\`,
        display,
        backgroundColor: \`rgba(\${Object.values(bgColor)})\`,
      }}
    >
      {/* 把普通的 MyComponent 组件包装起来。 */}
      <MyComponent></MyComponent>
    </div>
  );
};

CMyComponent.craft = {
  displayName: 'CMyComponent',
  props: defaultProps,
};
~~~
`;

const jscode3 = `# 3.把包装组件的类型以及对应的图标传递给 CraftEditor ：

~~~js
//对于自定义的组件，需要把组件本身的构造函数引用传递进去，这样 Editor 才能识别组件的类型。
//CCD 内置的组件类型一般都要传递进去。
//类型传递进去，但是不使用不会造成副作用。
const componentTypes = { ...defaultComponentTypes, CMyComponent };

//对于自定义的组件，需要定义一个图标放在侧边栏的图标列表中，
//CCD 内置的图标列表也需要传递进去。
//如果不想要 CCD 内置的图标列表，可以不传 defaultIconList
const iconList = [
  ...defaultIconList,
  <Icon label="MyComponent" icon={<UnorderedListOutlined style={iconStyle} />} component={<Element is={CMyComponent} canvas></Element>}></Icon>,
];
~~~
`;

export const CustomComponent = props => {
  //对于自定义的组件，需要把组件本身的构造函数引用传递进去，这样 Editor 才能识别组件的类型。
  //CCD 内置的组件类型一般都要传递进去。
  //类型传递进去，但是不使用不会造成副作用。
  const componentTypes = { ...defaultComponentTypes, CMyComponent };

  //对于自定义的组件，需要定义一个图标放在侧边栏的图标列表中，
  //CCD 内置的图标列表也需要传递进去。
  //如果不想要 CCD 内置的图标列表，可以不传 defaultIconList
  const iconList = [
    ...defaultIconList,
    <Icon label="MyComponent" icon={<UnorderedListOutlined style={iconStyle} />} component={<Element is={CMyComponent} canvas></Element>}></Icon>,
  ];

  return (
    <>
      <br></br>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc1}></ReactMarkdown>
      <br></br>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc2}></ReactMarkdown>
      <br></br>
      <CraftDesigner
        componentTypes={componentTypes}
        iconList={iconList}
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
          return testData;
        }}
      ></CraftDesigner>
      <br></br>
      <ReactMarkdown
        children={jscode1}
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
      <ReactMarkdown
        children={jscode2}
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
      <ReactMarkdown
        children={jscode3}
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
