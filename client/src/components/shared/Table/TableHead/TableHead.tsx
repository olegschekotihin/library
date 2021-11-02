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
}

const TableHead = ({ headData, onChange }: TableHeadTypes) => (
  <thead>
    <TableHeadRow
      allColumnName={headData}
      onChange={onChange}
    />
  </thead>
);

export default TableHead;
