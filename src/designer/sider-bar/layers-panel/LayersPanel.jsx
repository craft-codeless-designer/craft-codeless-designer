import { Layers } from '@craftjs/layers';
import { Scrollbars } from 'react-custom-scrollbars';

/**
 * @class LayersPanel
 *
 * 组件层级结构展示面板。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const LayersPanel = props => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={50}
      autoHeight
      autoHeightMin={0}
      autoHeightMax={'calc(100vh - 44px)'}
      thumbMinSize={30}
    >
      <Layers expandRootOnLoad={true} />
    </Scrollbars>
  );
};
