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

interface TableHeadProps {
  headData: HeadData[];
  onFilter: () => void;
  onSort: () => void;
}

function TableHead(props: TableHeadProps) {
  const {
    headData,
    onFilter,
    onSort,
    ...params
  } = props;

  return (
    <thead>
      <TableHeadRow
        allColumnName={headData}
        onFilter={onFilter}
        onSort={onSort}
        {...params}
      />
    </thead>
  );
}

export default TableHead;
