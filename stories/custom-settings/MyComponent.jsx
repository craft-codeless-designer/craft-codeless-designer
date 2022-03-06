import { Card } from 'antd';
import React from 'react';

/**
 * 与编写普通的 React 组件完全一致。
 *
 * @param {*} props
 * @returns
 */
export const MyComponent = props => {
  return (
    <>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};
