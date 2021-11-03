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
  onChange: () => void;
  onSort: () => void;
}

function TableHead({ headData, onChange, onSort }: TableHeadTypes) {
  return (
    <thead>
      <TableHeadRow
        allColumnName={headData}
        onChange={onChange}
        onSort={onSort}
      />
    </thead>
  );
}

export default TableHead;
