import React from 'react';
import TableHeadRow from './TableHeadRow';

export interface TableHeadTypes {
  headData: Object
}

const TableHead = ({ headData }:TableHeadTypes) => {
  console.log('TableHead');
  return (
    <thead>
      <TableHeadRow
        allColumnName={headData}
      />
    </thead>
  );
};

export default TableHead;
