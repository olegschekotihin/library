import React from 'react';
import { useTranslation } from 'react-i18next';
import { TableBodyColumn } from '../TableBodyColumn';
import { ColumnStyled } from './TableBodyRowStyled';
import { InnerLink } from '../../../shared/StyledComponents';

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
}

function TableBodyRow(props: TableBodyRowProps) {
  const {
    rowData,
    ...other
  } = props;
  const { t, i18n } = useTranslation();

  return (
    <tr>
      {Object.entries(rowData).map((value) => {
        if ((value[0] === 'firstName')
          || (value[0] === 'lastName')
          || (value[0] === 'birthDate')
          || (value[0] === 'countryOfBirth')
          || (value[0] === 'title')
          || (value[0] === 'code')
          || (value[0] === 'author')
          || (value[0] === 'pagesCount')
          || (value[0] === 'publicationDate')
        ) {
          return (
            <TableBodyColumn
              columnValue={value[1]}
              key={value[1]}
              id={value[0]}
              {...other}
            />
          );
        }
        return false;
      })}
      {
        (rowData.lastName)
        && (
          <ColumnStyled>
            <InnerLink
              to={`author/${rowData.id}/${rowData.lastName}`}
            >
              {t('formContent.viewDetail')}
            </InnerLink>
          </ColumnStyled>
        )
      }
      {
        (rowData.title)
        && (
          <ColumnStyled>
            <InnerLink
              to={`book/${rowData.id}/${rowData.title}`}
            >
              {t('formContent.viewDetail')}
            </InnerLink>
          </ColumnStyled>
        )
      }
    </tr>
  );
}

export default TableBodyRow;
