import { useNode } from '@craftjs/core';
import { Button } from 'antd';
import React from 'react';
import './CButton.css';
import { CButtonSettings } from './CButtonSettings';

export const CButton = props => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { text } = props;
  return <Button ref={ref => connect(drag(ref))}>{text}</Button>;
};

export const CButtonDefaultProps = {
  text: 'Button',
};

CButton.craft = {
  props: CButtonDefaultProps,
  related: {
    toolbar: CButtonSettings,
  },
};
