import { useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { CVideoSettings } from './CVideoSettings';

const defaultProps = {
  src: 'https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
  poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
  alt: '',
  controls: true,
  height: 300,
  minHeight: 200,
  width: 400,
  maxWidth: '100%',
  margin: [0, 0, 0, 0],
  padding: [0, 0, 0, 0],
  //NOTE: {border:'1px solid rgba(32,32,32,1)'} 被拆分成了 3 个属性进行存储和操作，避免进行 CSS 字符串解析
  borderSize: 0,
  borderType: 'solid',
  borderColor: { r: 32, g: 32, b: 32, a: 1 },
  bgColor: { r: 250, g: 250, b: 250, a: 1 },
};

const Wrapper = styled.div`
  video {
    pointer-events: ${props => (props.enabled ? 'none' : 'auto')};
    width: 100% !important;
    height: 100% !important;
  }
`;

/**
 * @class CVideo
 *
 * 包装原始的 video 标签，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CVideo = props => {
  props = {
    ...defaultProps,
    ...props,
  };

  const {
    src,
    poster,
    alt,
    controls,
    width,
    maxWidth,
    height,
    minHeight,
    margin,
    padding,
    borderSize,
    borderType,
    borderColor,
    bgColor,
    children,
  } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  // 这里需要根据 props 中传递的参数重新拼接 CSS 样式
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
    <Wrapper ref={connect} style={calcStyle()}>
      <video src={src} poster={poster} alt={alt} controls={controls} />
    </Wrapper>
  );
};

CVideo.craft = {
  displayName: 'Video',
  props: defaultProps,
  related: {
    toolbar: CVideoSettings,
  },
};
