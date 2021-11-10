import React from 'react';
import TableBodyColumnStyled from './TableBodyColumnStyled';

interface TableBodyColumnProps {
  columnValue: string | number;
  id: string;
}

function TableBodyColumn(props: TableBodyColumnProps) {
  const {
    columnValue,
    id,
    ...other
  } = props;

  return (
    <TableBodyColumnStyled
      data-id={id}
      {...other}
    >
      {columnValue}
    </TableBodyColumnStyled>
  );
}

export default TableBodyColumn;
