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
  onFilter: () => void;
  onSort: () => void;
}

function TableHeadRow({ allColumnName, onFilter, onSort }: TableHeadRowTypes) {
  return (
    <tr>
      {Object.entries(allColumnName).map((columnData: any) => (
        <TableHeadColumn
          key={columnData}
          name={columnData[1]}
          value={columnData[0]}
          onFilter={onFilter}
          onSort={onSort}
        />
      ))}
    </tr>
  );
}

export default TableHeadRow;
