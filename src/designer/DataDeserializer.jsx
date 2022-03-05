import { useEditor } from '@craftjs/core';
import React, { useEffect } from 'react';

/**
 * @class DataDeserializer
 *
 * - 用来把 pageData 反序列化成页面
 * - 这是一个纯逻辑组件，它没有外观
 * - DataDeserializer 中使用了 useEditor() 钩子，所以它只能在 Editor 上下文内部使用
 * - 参见 https://craft.js.org/docs/api/frame
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const DataDeserializer = props => {
  const { pageData } = props;
  const { actions } = useEditor();

  useEffect(() => {
    if (pageData) {
      actions.history.ignore().deserialize(pageData);
    }
  }, [pageData]);

  return <></>;
};
