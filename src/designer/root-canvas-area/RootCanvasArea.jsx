import { useEditor, useNode } from '@craftjs/core';
import { message } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CColumn } from '../../craft-components/layout/ccolumn/CColumn';

const RootAreaWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  padding: 5px; //FIXME: only available in design mode
  background-color: #e0e0e0;
`;

/**
 * @class RootCanvasArea
 *
 * The root container of the designer, this node can NOT be deleted.
 * If this node is deleted, there is nothing we can do with the designer.
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */

export const RootCanvasArea = props => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { actions, query } = useEditor();
  const { children, pageData } = props;

  //pageData 必须是 JSON 对象，而不是字符串
  useEffect(() => {
    try {
      if (pageData) {
        actions.deserialize(pageData);
      }
    } catch (error) {
      console.error(error);
      message.error(error);
    }
  }, [props.pageData]);

  return <RootAreaWrapper ref={ref => connect(drag(ref))}>{children}</RootAreaWrapper>;
};

RootCanvasArea.craft = {
  displayName: 'RootCanvasArea',
  rules: {
    canMoveIn: nodes => nodes.every(node => node.data.type !== CColumn),
  },
};
