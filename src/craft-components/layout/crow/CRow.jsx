import { Element } from '@craftjs/core';
import React from 'react';
import { CContainer } from '../CContainer';
import { CRowSettings } from './CRowSettings';

/**
 * @class CRow
 *
 * Row
 *
 * - Row has a width default to 100%.
 * - Only Columns are allowed inside a Row, any other types are forbidden.
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CRow = ({ children }) => {
  return (
    <div>
      <Element is={CContainer} canvas id="inner_el"></Element>
    </div>
  );
};

CRow.craft = {
  related: {
    toolbar: CRowSettings,
  },
  rules: {
    canDrag: (self, helper) => true,
    canDrop: (incoming, self, helper) => {
      //Only CColumns are allowed inside CRow.
      // if (incoming instanceof CColumn) {
      //   return true;
      // }
      // return false;
      return true;
    },
    canMoveIn: (incoming, self, helper) => true,
    canMoveOut: (outgoing, self, helper) => true,
  },
};
