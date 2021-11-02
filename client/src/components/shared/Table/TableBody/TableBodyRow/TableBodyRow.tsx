import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import { TableBodyColumn } from '../TableBodyColumn';
import { tableContent } from '../../../../../const';

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

interface TableBodyRowTypes {
  rowData: RowDataTypes
}

const Column = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
`;

const TableBodyRow = ({ rowData }: TableBodyRowTypes) => {
  const { VIEW_MORE_BUTTON } = tableContent;
  console.log('rowData', rowData);
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
          console.log('value[0]', value[0]);
          return (
            <TableBodyColumn
              columnValue={value[1]}
              key={value[1]}
              id={value[0]}
            />
          );
        }
        return false;
      })}
      {
        (rowData.lastName)
        && (
          <Column>
            <Link to={`author/${rowData.id}/${rowData.lastName}`}>{VIEW_MORE_BUTTON}</Link>
          </Column>
        )
      }
      {
        (rowData.title)
        && (
          <Column>
            <Link to={`book/${rowData.id}/${rowData.title}`}>{VIEW_MORE_BUTTON}</Link>
          </Column>
        )
      }
    </tr>
  );
};

export default TableBodyRow;
