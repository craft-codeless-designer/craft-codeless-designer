import { useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CColumnSettings } from './CColumnSettings';

//FIXME: this style should only be available in design mode
const CColumnWrapper = styled.div`
  background: #eee;
  border: 1px dashed rgb(32, 32, 32);
  margin: 0px 0;
  min-height: 40px;
  padding: 10px;
  flex: 1;
`;

/**
 * @class CColumn
 *
 * CColumn component.
 *
 * - CColumn can NOT have child nodes of itself.
 * - CColumn can only be a child of CRow component.
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CColumn = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return <CColumnWrapper ref={ref => connect(drag(ref))}>{children}</CColumnWrapper>;
};

CColumn.craft = {
  displayName: 'CColumn',
  related: {
    toolbar: CColumnSettings,
  },
  rules: {
    canMoveIn: nodes => nodes.every(node => node.data.type !== CColumn),
  },
};
