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
  onClick: () => void;
}

function TableHead({ headData, onChange, onClick }: TableHeadTypes) {
  return (
    <thead>
      <TableHeadRow
        allColumnName={headData}
        onChange={onChange}
        onClick={onClick}
      />
    </thead>
  );
}

export default TableHead;
