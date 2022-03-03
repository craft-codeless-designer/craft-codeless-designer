import { Element, useNode } from '@craftjs/core';
import React from 'react';
import { CColumn } from '../ccolumn/CColumn';
import { CRowSettings } from './CRowSettings';

const defaultProps = {
  margin: [0, 0, 0, 0],
  padding: [10, 10, 10, 10],
  border: '1px solid rgb(32, 32, 32)',
  background: '#ccc',
  minHeight: '40px',
  display: 'flex',
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

  const { margin, padding, border, background, minHeight, display, children } = props;
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      // 这里需要根据 props 中传递的参数重新拼接 CSS 样式
      style={{
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        border,
        background,
        minHeight,
        display,
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

export function nestedRow(props = {}) {
  return <Element is={CRow} canvas {...props}></Element>;
}
