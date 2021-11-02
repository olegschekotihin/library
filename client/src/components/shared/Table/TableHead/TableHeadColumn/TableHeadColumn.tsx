import React from 'react';
import TableHeadFilter from '../TableHeadFilter/TableHeadFilter';
import TableThStyled from './TableHeadColumnStyled';

interface TableHeadColumnTypes {
  name: string;
  onChange: () => void;
  value: string;
}

const TableHeadColumn = ({ name, onChange, value }: TableHeadColumnTypes) => (
  <TableThStyled>
    {name}
    <TableHeadFilter
      dataAttr={value}
      onchange={onChange}
    />
  </TableThStyled>
);

export default TableHeadColumn;
