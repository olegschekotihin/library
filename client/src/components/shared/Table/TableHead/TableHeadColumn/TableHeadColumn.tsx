import React from 'react';
import TableThStyled from "./TableHeadColumnStyled";

export interface TableHeadColumnTypes {
  name: string
}

const TableHeadColumn = ({ name }: TableHeadColumnTypes) => (
  <TableThStyled>{name}</TableThStyled>
);

export default TableHeadColumn;
