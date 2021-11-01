import React from 'react';
import TableBodyColumnStyled from './TableBodyColumnStyled';

interface TableBodyColumnTypes {
  columnValue: string | number;
}

const TableBodyColumn = ({ columnValue }: TableBodyColumnTypes) => (
  <TableBodyColumnStyled>{columnValue}</TableBodyColumnStyled>
);

export default TableBodyColumn;
