import { useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';

const CContainerWrapper = styled.div`
  background: #ccc;
  border: 1px solid rgb(32, 32, 32);
  margin: 10px 0;
  min-height: 40px;
  padding: 10px;
`;

export const CContainer = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <CContainerWrapper ref={ref => connect(drag(ref))}>{children}</CContainerWrapper>;
};
