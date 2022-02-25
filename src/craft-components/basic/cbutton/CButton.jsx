import { useNode } from '@craftjs/core';
import { Button } from 'antd';
import React from 'react';
import { CButtonSettings } from './CButtonSettings';

/**
 * @class CButton
 *
 * 包装原始的 Button 组件，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
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
