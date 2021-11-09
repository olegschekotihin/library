import React from 'react';
import { TableBodyRow } from './TableBodyRow';

type BodyData = {
  id?: string,
  title?: string,
  description?: string,
  code?: string,
  author?: string,
  pagesCount?: string,
  publicationDate?: string,
  authorId?: string,
  firstName?: string,
  lastName?: string,
  birthDate?: string,
  countryOfBirth?: string,
}

export interface TableBodyProps {
  bodyData: BodyData[];
}

function TableBody(props: TableBodyProps) {
  const {
    bodyData,
    ...params
  } = props;

  return (
    <tbody>
      { bodyData.map((rowData: any) => (
        <TableBodyRow
          rowData={rowData}
          key={rowData.id}
          {...params}
        />
      )) }
    </tbody>
  );
}

export default TableBody;
