import React from 'react';
import TableHeadFilter from '../TableHeadFilter/TableHeadFilter';
import TableThStyled from './TableHeadColumnStyled';

interface TableHeadColumnProps {
  name: string;
  onFilter: () => void;
  onSort: () => void;
  value: string;
}

function TableHeadColumn(props: TableHeadColumnProps) {
  const {
    name,
    value,
    onFilter,
    onSort,
    ...other
  } = props;

  return (
    <TableThStyled>
      { (value === 'title' || value === 'firstName') && (
        <TableHeadFilter
          dataAttr={value}
          title={name}
          onchange={onFilter}
          {...other}
        />
      )}
      <a href={`#?filter-by-${name}`} data-value={value} onClick={onSort}>{name}</a>
    </TableThStyled>
  );
}

export default TableHeadColumn;
