import React from 'react';
import { TableHeadRow } from './TableHeadRow';

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

interface TableHeadTypes {
  headData: HeadData[];
  onFilter: () => void;
  onSort: () => void;
}

function TableHead({ headData, onFilter, onSort }: TableHeadTypes) {
  return (
    <thead>
      <TableHeadRow
        allColumnName={headData}
        onFilter={onFilter}
        onSort={onSort}
      />
    </thead>
  );
}

export default TableHead;
