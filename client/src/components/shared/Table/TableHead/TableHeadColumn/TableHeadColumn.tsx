import React from 'react';
import TableHeadFilter from '../TableHeadFilter/TableHeadFilter';
import TableThStyled from './TableHeadColumnStyled';

interface TableHeadColumnTypes {
  name: string;
  onChange: () => void;
  onClick: () => void;
  value: string;
}

function TableHeadColumn({
  name, value, onChange, onClick,
}: TableHeadColumnTypes) {
  return (
    <TableThStyled>
      <TableHeadFilter
        dataAttr={value}
        title={name}
        onchange={onChange}
      />
      <a href={`#?filter-by-${name}`} data-value={value} onClick={onClick}>{name}</a>
    </TableThStyled>
  );
}

export default TableHeadColumn;
