import { useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CContainerSettings } from './CContainerSettings';

const CContainerWrapper = styled.div`
  background: #ccc;
  border: 1px solid rgb(32, 32, 32);
  margin: 10px 0;
  min-height: 40px;
  padding: 10px;
`;

/**
 * @class CContainer
 *
 * 容器型组件，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CContainer = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return <CContainerWrapper ref={ref => connect(drag(ref))}>{children}</CContainerWrapper>;
};

CContainer.craft = {
  related: {
    toolbar: CContainerSettings,
  },
};
