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

/**
 * Component for showing table head
 *
 * @param props
 * @constructor
 */

function TableHead(props: TableHeadProps) {
  const {
    headData,
    onFilter,
    onSort,
    ...other
  } = props;

  return (
    <thead>
      <TableHeadRow
        allColumnName={headData}
        onFilter={onFilter}
        onSort={onSort}
        {...other}
      />
    </thead>
  );
}

export default TableHead;
