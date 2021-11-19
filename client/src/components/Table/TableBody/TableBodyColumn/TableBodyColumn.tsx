import React from 'react';
import TableBodyColumnStyled from './TableBodyColumnStyled';

interface TableBodyColumnProps {
  columnValue: string | number;
  id: string;
}

/**
 * Component for showing column in table body
 *
 * @param props
 * @constructor
 */

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
