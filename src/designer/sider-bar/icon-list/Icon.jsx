import { useEditor } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  padding: 5px;
  overflow: hidden;
  border: 1px solid #8e8c93;
  text-align: center;
  background-color: #6e85b2;
  border-radius: 2px;
  cursor: move;
  div {
    width: 45px;
    height: 45px;
    margin: 0px 10px;
    overflow: hidden;
  }
  p {
    font-size: 12px;
    color: #fff;
    margin: 0;
    padding: 5px;
    text-align: center;
  }
`;

/**
 * @class Icon
 * 可拖拽的图标
 *
 * @returns
 */
export const Icon = props => {
  const { connectors } = useEditor();
  const { icon, label, component } = props;

  return (
    <Wrapper ref={ref => connectors.create(ref, component)}>
      <div>{icon}</div>
      <p>{label}</p>
    </Wrapper>
  );
};
