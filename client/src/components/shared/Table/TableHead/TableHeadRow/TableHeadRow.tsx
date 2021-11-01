import React from 'react';
import styled from 'styled-components';
import { TableHeadColumn } from '../TableHeadColumn';

export interface TableHeadRowTypes {
  allColumnName: string[],
}

const TableHeadRowStyled = styled.tr`
`;

const TableHeadRow = ({ allColumnName }: TableHeadRowTypes) => (
  <TableHeadRowStyled>
    {allColumnName.map((columnData: any) => (
      <TableHeadColumn
        key={columnData}
        name={columnData}
      />
    ))}
  </TableHeadRowStyled>
);

export default TableHeadRow;
