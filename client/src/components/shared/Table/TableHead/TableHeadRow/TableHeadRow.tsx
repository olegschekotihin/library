import React from 'react';
import styled from 'styled-components';
import { TableHeadColumn } from '../TableHeadColumn';

type HeadData = {
  firstName?: string,
  lastName?: string,
  birthDate?: string,
  countryOfBirth?: string,
  code?: string,
  author?: string,
  pageCount?: string,
  publicationDate?: string,
}

interface TableHeadRowTypes {
  allColumnName: HeadData[];
  onChange: () => void;
}

const TableHeadRowStyled = styled.tr`
`;

const TableHeadRow = ({ allColumnName, onChange }: TableHeadRowTypes) => (
  <TableHeadRowStyled>
    {Object.entries(allColumnName).map((columnData: any) => (
      <TableHeadColumn
        key={columnData}
        name={columnData[1]}
        value={columnData[0]}
        onChange={onChange}
      />
    ))}
  </TableHeadRowStyled>
);

export default TableHeadRow;
