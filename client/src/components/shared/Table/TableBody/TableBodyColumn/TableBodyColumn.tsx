import React from 'react';
import TableBodyColumnStyled from './TableBodyColumnStyled';

interface TableBodyColumnTypes {
  columnValue: string | number;
  id: string;
}

const TableBodyColumn = ({ columnValue, id }: TableBodyColumnTypes) => (
  <TableBodyColumnStyled
    data-id={id}
  >
    {columnValue}
  </TableBodyColumnStyled>
);

export default TableBodyColumn;
