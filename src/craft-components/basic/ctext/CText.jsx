import { useEditor, useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import { CTextSettings } from './CTextSettings';

export const CText = ({ fontSize, textAlign, fontWeight, color, shadow, text, margin }) => {
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
      tagName="h2" // Use a custom HTML tag (uses a div by default)
      style={{
        width: '100%',
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
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
    shadow: 0,
    text: 'Text',
  },
  related: {
    toolbar: CTextSettings,
  },
};
