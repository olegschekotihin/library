import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export interface TableBodyTypes {
  headData: Object,
  bodyData: Array<Object>
}

const Table = ({ headData, bodyData }:TableBodyTypes) => (
  <table>
    <TableHead
      headData={headData}
    />
    <TableBody
      bodyData={bodyData}
    />
  </table>
);

export default Table;
