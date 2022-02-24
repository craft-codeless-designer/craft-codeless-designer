import { Element, Frame } from '@craftjs/core';
import './CanvasArea.css';

export const CanvasArea = props => {
  return (
    <Frame>
      <Element is="div" canvas className="canvasArea"></Element>
    </Frame>
  );
};
