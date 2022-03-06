import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const doc = `
# API

**CraftDesinger 是最核心的组件，它集成了所有功能。**

CraftDesinger 核心 props 说明：

| props | 说明 |
| - | - |
| onPreview | 预览按钮回调函数 | 
| onDelete | 删除按钮回调函数 | 
| onUndo | Undo 按钮回调函数 | 
| onRedo | Redo 按钮回调函数 | 
| onSaveData | 保存 按钮回调函数 |  
| onLoadData | 加载 按钮回调函数 | 
| onHelp | Help 按钮回调函数| 
| showNavBar | 是否渲染顶部导航条，默认为 true |   
| showSiderBar | 是否渲染侧边工具栏，默认为 true | 
| componentTypes | 组件类型列表， CraftDesigner 内置的组件已经全部添加在列表中  | 
| iconList | 组件图标列表， CraftDesigner 内置的图标已经全部添加在列表中 | 
| pageData | 页面数据，传递和修改 pageData 会触发 CraftDesigner 重新渲染页面 | 
| enabled | 是否启用编辑状态，默认为 true ，如果需要进入预览状态，请把此配置项设置为 false | 

`;

export const API = props => {
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc}></ReactMarkdown>
    </>
  );
};
