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
  tableType: string;
}

/**
 * Component for showing table body
 *
 * @param props
 * @constructor
 */

function TableBody(props: TableBodyProps) {
  const {
    bodyData,
    tableType,
    ...other
  } = props;

  return (
    <tbody>
      { bodyData.map((rowData: any) => (
        <TableBodyRow
          rowData={rowData}
          key={rowData.id}
          tableType={tableType}
          {...other}
        />
      )) }
    </tbody>
  );
}

export default TableBody;
