import React from 'react';
import TableHeadColumn from '../TableHeadColumn';

export interface TableHeadRowTypes {
  allColumnName: Object
}

const TableHeadRow = ({ allColumnName }:TableHeadRowTypes) => {
  console.log('allColumnName', allColumnName);
  return (
    <tr>
      {Object.values(allColumnName).map((columnData) => {
        console.log('column', columnData);
        return (
          <TableHeadColumn
            key={columnData}
            name={columnData}
          />
        );
      })}
    </tr>
  );
};

export default TableHeadRow;
