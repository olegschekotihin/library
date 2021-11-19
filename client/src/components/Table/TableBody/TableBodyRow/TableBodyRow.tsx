import React from 'react';
import { useTranslation } from 'react-i18next';
import { TableBodyColumn } from '../TableBodyColumn';
import { ColumnStyled } from './TableBodyRowStyled';
import { InnerLink } from '../../../shared/StyledComponents';
import { BOOKS_TABLE_COLUMN, AUTHORS_TABLE_COLUMN } from '../../../../const';

type RowDataTypes = {
  id: string,
  title: string,
  description: string,
  code: string,
  author: string,
  pagesCount: string,
  publicationDate: string,
  authorId: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
}

interface TableBodyRowProps {
  rowData: RowDataTypes;
  tableType: string;
}

/**
 * Component for showing row in table body
 *
 * @param props
 * @constructor
 */

function TableBodyRow(props: TableBodyRowProps) {
  const {
    rowData,
    tableType,
    ...other
  } = props;
  const { t } = useTranslation();
  const dataType = (tableType === 'book') ? BOOKS_TABLE_COLUMN : AUTHORS_TABLE_COLUMN;

  const sortingColumnToView = (valuesForSortData: any[], allColumnData: any[]): any[] => {
    const resultData: any[] = [];

    valuesForSortData.map((column) => {
      if (allColumnData[0] === column) {
        return resultData.push(allColumnData);
      }
      return false;
    });
    return resultData;
  };

  return (
    <tr>
      {Object.entries(rowData).map((value) => {
        const sortedData = sortingColumnToView(dataType, value);

        return sortedData.map((item) => (
          <TableBodyColumn
            columnValue={item[1]}
            key={item[1]}
            id={item[0]}
            {...other}
          />
        ));
      })}
      {
        (dataType === AUTHORS_TABLE_COLUMN)
        && (
          <ColumnStyled>
            <InnerLink
              to={`${tableType}/${rowData.id}/${rowData.lastName}`}
            >
              {t('form-content.view-detail')}
            </InnerLink>
          </ColumnStyled>
        )
      }
      {
        (dataType === BOOKS_TABLE_COLUMN)
        && (
          <ColumnStyled>
            <InnerLink
              to={`${tableType}/${rowData.id}/${rowData.title}`}
            >
              {t('form-content.view-detail')}
            </InnerLink>
          </ColumnStyled>
        )
      }
    </tr>
  );
}

export default TableBodyRow;
