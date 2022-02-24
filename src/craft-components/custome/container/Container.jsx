import { useNode } from '@craftjs/core';
import React from 'react';
import './Container.css';

export const Container = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className="container" ref={ref => connect(drag(ref))}>
      {children}
    </div>
  );
};
