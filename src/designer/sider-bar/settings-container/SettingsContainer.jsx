import { useEditor } from '@craftjs/core';
import React from 'react';
import './SettingsContainer.css';

export const SettingsContainer = props => {
  const { active, related } = useEditor((state, query) => {
    const currentlySelectedNodeId = query.getEvent('selected').first();
    return {
      active: currentlySelectedNodeId,
      related: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });

  console.log('related-->', related);

  return (
    <div>
      {active && related.toolbar && React.createElement(related.toolbar)}
      {!active && (
        <div
          style={{
            color: 'rgba(0, 0, 0, 0.5607843137254902)',
            fontSize: '11px',
          }}
        >
          <h2 className="pb-1">Click on a component to start editing.</h2>
        </div>
      )}
    </div>
  );
};
