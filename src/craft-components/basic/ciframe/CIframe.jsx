import { useEditor, useNode } from '@craftjs/core';
import styled from 'styled-components';
import { CIframeSettings } from './CIframeSettings';

const defaultProps = {
  src: 'https://map.baidu.com/@13225221.26,3748918.53,12z',
  alt: 'MDN',
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
  iframe {
    pointer-events: ${props => (props.enabled ? 'none' : 'auto')};
    width: 100% !important;
    height: 100% !important;
  }
`;

/**
 * @class CIframe
 *
 * 包装原始的 iframe 标签，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CIframe = props => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { src, alt, width, maxWidth, height, minHeight, margin, padding, borderSize, borderType, borderColor, bgColor, children } = props;

  const { enabled } = useEditor(state => ({
    enabled: state.options.enabled,
  }));

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
    <Wrapper ref={connect} enabled={enabled} style={calcStyle()}>
      <iframe src={src} alt={alt} style={{ border: 'none' }} />
    </Wrapper>
  );
};

CIframe.craft = {
  displayName: 'Iframe',
  props: defaultProps,
  related: {
    toolbar: CIframeSettings,
  },
};
