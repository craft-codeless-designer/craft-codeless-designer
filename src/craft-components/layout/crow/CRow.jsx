import { Element, useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CColumn } from '../ccolumn/CColumn';
import { CRowSettings } from './CRowSettings';

//FIXME: this style should only be available in design mode
const CRowWrapper = styled.div`
  background: #ccc;
  border: 1px solid rgb(32, 32, 32);
  margin: 5px 0;
  min-height: 40px;
  padding: 10px;
  display: flex;
`;

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
export const CRow = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <CRowWrapper ref={ref => connect(drag(ref))}>{children}</CRowWrapper>;
};

CRow.craft = {
  displayName: 'CRow',
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
