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
    ...params
  } = props;

  return (
    <TableBodyColumnStyled
      data-id={id}
      {...params}
    >
      {columnValue}
    </TableBodyColumnStyled>
  );
}

export default TableBodyColumn;
