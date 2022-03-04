import { UnorderedListOutlined } from '@ant-design/icons';
import { Element } from '@craftjs/core';
import { message } from 'antd';
import React from 'react';
import { CraftDesigner, defaultComponentTypes } from '../../src/designer/CraftDesigner';
import { defaultIconList, iconStyle } from '../../src/designer/sider-bar/icon-list/default-icon-list';
import { Icon } from '../../src/designer/sider-bar/icon-list/Icon';
import { CMyComponent } from './CMyComponent';

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
      <div>
        <h1>自定义组件</h1>
        <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>自定义组件的步骤：</h3>
        <ul>
          <li>第一步：编写一个普通的 React 组件。</li>
          <li>第二步：编写一个 Craft 包装组件，用来包装普通的 React 组件，并暴露给 Editor。</li>
          <li>第三步：给组件编写一个可拖拽的图标。</li>
          <li>第四步：给组件编写对应的配置Panel。</li>
        </ul>
        <h3>这个例子演示前3步。</h3>
      </div>

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
