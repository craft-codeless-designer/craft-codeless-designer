import { useNode } from '@craftjs/core';
import React from 'react';
import { CColumnSettings } from './CColumnSettings';

const defaultProps = {
  height: 40,
  minHeight: 40,
  margin: [0, 0, 0, 0],
  padding: [10, 10, 10, 10],
  //NOTE: {border:'1px solid rgba(32,32,32,1)'} 被拆分成了 3 个属性进行存储和操作，避免进行 CSS 字符串解析
  borderSize: 1,
  borderType: 'dashed',
  borderColor: { r: 32, g: 32, b: 32, a: 1 },
  bgColor: { r: 250, g: 250, b: 250, a: 1 },
  flex: 1,
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

  console.log(props);

  const { height, minHeight, margin, padding, borderSize, borderType, borderColor, bgColor, flex, children } = props;

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
    <div
      ref={ref => connect(drag(ref))}
      style={{
        height: `${height}px`,
        minHeight: `${minHeight}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        border: `${borderSize}px ${borderType} rgba(${Object.values(borderColor)})`,
        backgroundColor: `rgba(${Object.values(bgColor)})`,
        flex,
      }}
    >
      {children}
    </div>
    // </Resizer>
  );
};

CColumn.craft = {
  displayName: 'CColumn',
  props: defaultProps,
  related: {
    toolbar: CColumnSettings,
  },
  rules: {
    canMoveIn: nodes => nodes.every(node => node.data.type !== CColumn),
  },
};
