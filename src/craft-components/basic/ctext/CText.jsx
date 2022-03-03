import { useEditor, useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import { CTextSettings } from './CTextSettings';

/**
 * @class CText
 *
 * 包装原始的 ContentEditable 组件，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CText = props => {
  const {
    fontSize = 15,
    textAlign = 'left',
    fontWeight = 400,
    color = { r: 92, g: 90, b: 90, a: 1 },
    shadow = 0,
    text = 'Text',
    margin = [0, 0, 0, 0],
    padding = [0, 0, 0, 0],
  } = props;

  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode();
  const { enabled } = useEditor(state => ({
    enabled: state.options.enabled,
  }));

  return (
    <ContentEditable
      innerRef={connect}
      html={text} // innerHTML of the editable div
      disabled={!enabled}
      onChange={e => {
        setProp(prop => (prop.text = e.target.value), 500);
      }} // use true to disable editing
      tagName="p" // Use a custom HTML tag (uses a div by default)
      style={{
        width: '100%',
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        color: `rgba(${Object.values(color)})`,
        fontSize: `${fontSize}px`,
        textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        fontWeight,
        textAlign,
      }}
    />
  );
};

CText.craft = {
  displayName: 'Text',
  props: {
    fontSize: '15',
    textAlign: 'left',
    fontWeight: '500',
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadow: 0,
    text: 'Text',
  },
  related: {
    toolbar: CTextSettings,
  },
};
