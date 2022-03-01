import { Element, Frame } from '@craftjs/core';

const styleObj = {
  width: '100%',
  minHeight: '200px',
  height: '100%',
  padding: '5px', //FIXME: only available in design mode
  backgroundColor: '#e0e0e0',
};

/**
 * @class RootCanvasArea
 *
 * The root container of the designer, this node can NOT be deleted.
 * If this node is deleted, there is nothing we can do with the designer.
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const RootCanvasArea = props => {
  return (
    <Frame>
      {/* FIXME: can NOT drop CColumn here */}
      <Element is="div" canvas style={styleObj}></Element>
    </Frame>
  );
};
