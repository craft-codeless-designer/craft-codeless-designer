import { useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CColumnSettings } from './CColumnSettings';

const CColumnWrapper = styled.div`
  background: #ccc;
  border: 1px solid rgb(32, 32, 32);
  margin: 10px 0;
  min-height: 40px;
  padding: 10px;
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
  related: {
    toolbar: CColumnSettings,
  },
};
