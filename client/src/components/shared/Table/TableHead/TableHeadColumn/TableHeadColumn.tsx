import React from 'react';
import TableHeadFilter from '../TableHeadFilter/TableHeadFilter';
import TableThStyled from './TableHeadColumnStyled';

interface TableHeadColumnTypes {
  name: string;
  onFilter: () => void;
  onSort: () => void;
  value: string;
}

function TableHeadColumn({
  name, value, onFilter, onSort,
}: TableHeadColumnTypes) {
  return (
    <TableThStyled>
      { (value === 'title' || value === 'firstName') && (
        <TableHeadFilter
          dataAttr={value}
          title={name}
          onchange={onFilter}
        />
      )}
      <a href={`#?filter-by-${name}`} data-value={value} onClick={onSort}>{name}</a>
    </TableThStyled>
  );
}

export default TableHeadColumn;
