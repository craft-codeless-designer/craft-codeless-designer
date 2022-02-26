import { Element, Frame } from '@craftjs/core';

const styleObj = {
  border: '1px solid #ccc',
  padding: '10px',
  width: '100%',
  backgroundColor: '#e0e0e0',
};

/**
 * @class CanvasArea
 *
 * 设计器主体区域。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CanvasArea = props => {
  return (
    <Frame>
      <Element is="div" canvas style={styleObj}></Element>
    </Frame>
  );
};
