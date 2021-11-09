import React from 'react';
import { TableBodyColumn } from '../TableBodyColumn';
import { ColumnStyled } from './TableBodyRowStyled';
import { TABLE_CONTENT } from '../../../../const';
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
    ...params
  } = props;
  const { VIEW_MORE_BUTTON } = TABLE_CONTENT;

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
              {...params}
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
              {VIEW_MORE_BUTTON}
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
              {VIEW_MORE_BUTTON}
            </InnerLink>
          </ColumnStyled>
        )
      }
    </tr>
  );
}

export default TableBodyRow;
