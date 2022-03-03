import { Element, useNode } from '@craftjs/core';
import { CImgSettings } from './CImgSettings';
import { defaultImg } from './default-img';

const defaultProps = {
  src: defaultImg,
  alt: '',
  height: 200,
  minHeight: 200,
  width: 100,
  maxWidth: '100%',
  margin: [0, 0, 0, 0],
  padding: [0, 0, 0, 0],
  //NOTE: {border:'1px solid rgba(32,32,32,1)'} 被拆分成了 3 个属性进行存储和操作，避免进行 CSS 字符串解析
  borderSize: 0,
  borderType: 'solid',
  borderColor: { r: 32, g: 32, b: 32, a: 1 },
  bgColor: { r: 250, g: 250, b: 250, a: 1 },
};

/**
 * @class CImg
 *
 * 包装原始的 img 标签，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CImg = props => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { src, alt, width, maxWidth, height, minHeight, margin, padding, borderSize, borderType, borderColor, bgColor, children } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  const calcStyle = () => {
    let style = {
      width: `${width}px`,
      maxWidth: `${maxWidth}px`,
      height: `${height}px`,
      minHeight: `${minHeight}px`,
      margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      border: `${borderSize}px ${borderType} rgba(${Object.values(borderColor)})`,
      backgroundColor: `rgba(${Object.values(bgColor)})`,
    };
    return style;
  };

  return (
    <img
      ref={ref => connect(drag(ref))}
      draggable={false}
      src={src}
      alt={alt}
      // 这里需要根据 props 中传递的参数重新拼接 CSS 样式
      style={calcStyle()}
    />
  );
};

CImg.craft = {
  displayName: 'Image',
  props: defaultProps,
  related: {
    toolbar: CImgSettings,
  },
};

export function getImg(props = {}) {
  return <Element is={CImg} canvas {...props}></Element>;
}
