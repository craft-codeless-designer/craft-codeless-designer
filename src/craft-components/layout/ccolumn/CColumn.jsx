import { useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CColumnSettings } from './CColumnSettings';

//FIXME: this style should only be available in design mode
const CColumnWrapper = styled.div`
  background: #eee;
  border: 1px dashed rgb(32, 32, 32);
  margin: 0px 0;
  min-height: 40px;
  padding: 10px;
  flex: 1;
`;

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
};

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
export const CColumn = props => {
  props = {
    ...defaultProps,
    ...props,
  };
  const { flexDirection, alignItems, justifyContent, fillSpace, background, color, padding, margin, shadow, radius, children } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    // <Resizer
    //   propKey={{ width: 'width', height: 'height' }}
    //   style={{
    //     justifyContent,
    //     flexDirection,
    //     alignItems,
    //     background: `rgba(${Object.values(background)})`,
    //     color: `rgba(${Object.values(color)})`,
    //     padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
    //     margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
    //     boxShadow: shadow === 0 ? 'none' : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
    //     borderRadius: `${radius}px`,
    //     flex: fillSpace === 'yes' ? 1 : 'unset',
    //   }}
    // >
    <CColumnWrapper ref={ref => connect(drag(ref))}>{children}</CColumnWrapper>
    // </Resizer>
  );
};

CColumn.craft = {
  displayName: 'CColumn',
  related: {
    toolbar: CColumnSettings,
  },
  rules: {
    canMoveIn: nodes => nodes.every(node => node.data.type !== CColumn),
  },
};
