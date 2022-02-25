import { useNode } from '@craftjs/core';
import React from 'react';
import './CContainer.css';
import { CContainerSettings } from './CContainerSettings';

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

  return (
    <div className="ccontainer" ref={ref => connect(drag(ref))}>
      {children}
    </div>
  );
};

CContainer.craft = {
  related: {
    toolbar: CContainerSettings,
  },
};
