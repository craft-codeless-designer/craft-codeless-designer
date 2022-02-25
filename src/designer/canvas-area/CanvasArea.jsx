import { Element, Frame } from '@craftjs/core';
import './CanvasArea.css';

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
      <Element is="div" canvas className="canvasArea"></Element>
    </Frame>
  );
};
