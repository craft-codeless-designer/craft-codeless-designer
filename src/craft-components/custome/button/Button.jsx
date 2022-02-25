import { useNode } from '@craftjs/core';
import { Button } from 'antd';
import React from 'react';
import { ButtonSettings } from './ButtonSettings';

export const MyButton = props => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { text } = props;
  return <Button ref={ref => connect(drag(ref))}>{text}</Button>;
};

export const ButtonDefaultProps = {
  text: '按钮',
};

MyButton.craft = {
  props: ButtonDefaultProps,
  related: {
    toolbar: ButtonSettings,
  },
};
