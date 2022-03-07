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

const doc1 = `# 🛠️组件对应的 Settings

**此文档描述自定义组件的第四步，自定义组件的属性配置面板。**

## 1.编写 Settings 面板
`;

const jscode1 = `

~~~js
import { Form } from 'antd';
import React from 'react';
import { CBorder } from '../../src/designer/sider-bar/settings/form-items/CBorder';
import { CColorPicker } from '../../src/designer/sider-bar/settings/form-items/CColorPicker';
import { CMargin } from '../../src/designer/sider-bar/settings/form-items/CMargin';

/**
 * @class CMyComponentSettings
 *
 * MyComponent 对应的属性配置面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CMyComponentSettings = props => {
  return (
    <Form layout="vertical">
      <Form.Item label="Border">
        <CBorder {...props} propKey="border"></CBorder>
      </Form.Item>
      <Form.Item label="Background Color">
        <CColorPicker {...props} propKey="bgColor"></CColorPicker>
      </Form.Item>
      <Form.Item label="Margin">
        <CMargin {...props} propKey="margin"></CMargin>
      </Form.Item>
      <Form.Item label="Padding">
        <CMargin {...props} propKey="padding"></CMargin>
      </Form.Item>
    </Form>
  );
};
~~~
`;

const doc2 = `
## 2.在 MyComponent 中关联配置面板：
`;

const jscode2 = `

~~~js
//省略相同的代码...

CMyComponent.craft = {
  displayName: 'CMyComponent',
  props: defaultProps,
  related: {
    toolbar: CMyComponentSettings, //这里关联对应的配置面板，当组件被选中时，Craft 会获取到对应的类型。
  },
};

//省略相同的代码...
~~~
`;

const doc3 = `
## 3.最终效果：

**请把 MyComponent 拖拽到设计区，然后选中它，查看右侧对应的 Settings 。**
**如果需要给 MyComponent 加上更多的配置项，包括带有具体业务信息的配置项，直接修改它的配置面板组件即可， Craft 会把修改之后的值同步到组件的 props 上（在 Craft 底层实际上是在修改组件对应的 Node 数据结构，然后触发 React 重新渲染组件）。**
`;

export const CustomSettings = props => {
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
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc2}></ReactMarkdown>
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
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc3}></ReactMarkdown>
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
    </>
  );
};
