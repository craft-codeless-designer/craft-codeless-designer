import { useNode } from '@craftjs/core';
import React from 'react';
import { CColumn } from '../ccolumn/CColumn';
import { CRowSettings } from './CRowSettings';

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
 * @class CRow
 *
 * Row
 *
 * - Row has a width default to 100%.
 * - Only Columns are allowed inside a Row, any other types are forbidden.
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CRow = props => {
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
      ref={connect}
      // 这里需要根据 props 中传递的参数重新拼接 CSS 样式
      style={{
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        border: `${borderSize}px ${borderType} rgba(${Object.values(borderColor)})`,
        minHeight: `${minHeight}px`,
        display,
        backgroundColor: `rgba(${Object.values(bgColor)})`,
      }}
    >
      {children}
    </div>
  );
};

CRow.craft = {
  displayName: 'CRow',
  props: defaultProps,
  related: {
    toolbar: CRowSettings,
  },
  rules: {
    canMoveIn: nodes => nodes.every(node => node.data.type === CColumn),
  },
};
