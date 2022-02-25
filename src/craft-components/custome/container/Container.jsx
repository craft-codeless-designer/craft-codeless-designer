import { useNode } from '@craftjs/core';
import React from 'react';
import './Container.css';
import { ContainerSettings } from './ContainerSettings';

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

Container.craft = {
  related: {
    toolbar: ContainerSettings,
  },
};
