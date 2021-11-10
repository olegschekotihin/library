import React from 'react';
import { useTranslation } from 'react-i18next';
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
    ...other
  } = props;
  const { t, i18n } = useTranslation(['translation', 'table']);

  return (
    <tr>
      {Object.entries(allColumnName).map((columnData: any) => (
        <TableHeadColumn
          key={columnData}
          name={t(columnData[1], { ns: 'table' })}
          value={columnData[0]}
          onFilter={onFilter}
          onSort={onSort}
          {...other}
        />
      ))}
    </tr>
  );
}

export default TableHeadRow;
