import { Layers } from '@craftjs/layers';

/**
 * @class LayersPanel
 *
 * 组件层级结构展示面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const LayersPanel = props => {
  return <Layers expandRootOnLoad={true} />;
};
