import { ArrowUpOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons';
import { useEditor, useNode } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './RenderNode.css';

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

const Btn = styled.a`
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode(node => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef();

  useEffect(() => {
    if (dom) {
      //FIXME:需要实现 component-selected 样式
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback(dom => {
    const { top, left, bottom } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;
    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document.querySelector('.craftjs-renderer').addEventListener('scroll', scroll);
    return () => {
      document.querySelector('.craftjs-renderer').removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              style={{
                color: '#FFF',
                padding: '15px',
                alignItems: 'center',
                display: 'flex',
                position: 'fixed',
                backgroundColor: '#3e2c41',
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <h2 style={{ fleX: 1, marginRight: '1rem', marginBottom: '0', color: '#fff', fontSize: '12px' }}>{name}</h2>
              {moveable ? (
                <Btn style={{ fleX: 1, marginRight: '1rem', cursor: 'move' }} ref={drag}>
                  <DragOutlined></DragOutlined>
                </Btn>
              ) : null}
              {id !== ROOT_NODE && (
                <Btn
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <ArrowUpOutlined></ArrowUpOutlined>
                </Btn>
              )}
              {deletable ? (
                <Btn
                  style={{ cursor: 'pointer' }}
                  onMouseDown={e => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <DeleteOutlined></DeleteOutlined>
                </Btn>
              ) : null}
            </IndicatorDiv>,
            document.querySelector('.page-container'),
          )
        : null}
      {render}
    </>
  );
};
