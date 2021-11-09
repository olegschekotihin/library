import React from 'react';
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

interface TableHeadRowProps {
  allColumnName: HeadData[];
  onFilter: () => void;
  onSort: () => void;
}

function TableHeadRow(props: TableHeadRowProps) {
  const {
    allColumnName,
    onFilter,
    onSort,
    ...params
  } = props;

  return (
    <tr>
      {Object.entries(allColumnName).map((columnData: any) => (
        <TableHeadColumn
          key={columnData}
          name={columnData[1]}
          value={columnData[0]}
          onFilter={onFilter}
          onSort={onSort}
          {...params}
        />
      ))}
    </tr>
  );
}

export default TableHeadRow;
