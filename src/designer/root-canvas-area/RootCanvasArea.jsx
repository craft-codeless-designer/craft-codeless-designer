import { Element, Frame, useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CColumn } from '../../craft-components/layout/ccolumn/CColumn';

const RootAreaWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  padding: 5px; //FIXME: only available in design mode
  background-color: #e0e0e0;
`;

/**
 * @class RootCanvasArea
 *
 * The root container of the designer, this node can NOT be deleted.
 * If this node is deleted, there is nothing we can do with the designer.
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */

export const RootCanvasArea = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <RootAreaWrapper ref={ref => connect(drag(ref))}>{children}</RootAreaWrapper>;
};

RootCanvasArea.craft = {
  displayName: 'RootCanvasArea',
  rules: {
    canMoveIn: nodes => nodes.every(node => node.data.type !== CColumn),
  },
};

/**
 * HOC
 * @returns
 */
export function createCanvasArea() {
  return (
    <Frame>
      <Element is={RootCanvasArea} canvas></Element>
    </Frame>
  );
}
