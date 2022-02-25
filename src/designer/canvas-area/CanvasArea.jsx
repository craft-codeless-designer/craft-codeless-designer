import { Element, Frame } from '@craftjs/core';

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
      <Element is="div" canvas style={{ border: '1px solid #ccc', padding: '10px', width: '100%' }}></Element>
    </Frame>
  );
};
