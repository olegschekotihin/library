import React from 'react';
import { TableHeadRow } from './TableHeadRow';

export interface TableHeadTypes {
  headData: string[];
}

const TableHead = ({ headData }: TableHeadTypes) => (
  <thead>
    <TableHeadRow
      allColumnName={headData}
    />
  </thead>
);

export default TableHead;
