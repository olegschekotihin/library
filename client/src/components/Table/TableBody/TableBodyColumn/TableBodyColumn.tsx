import React from 'react';
import TableBodyColumnStyled from './TableBodyColumnStyled';

interface TableBodyColumnTypes {
  columnValue: string | number;
  id: string;
}

function TableBodyColumn({ columnValue, id }: TableBodyColumnTypes) {
  return (
    <TableBodyColumnStyled
      data-id={id}
    >
      {columnValue}
    </TableBodyColumnStyled>
  );
}

export default TableBodyColumn;
