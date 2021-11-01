import React from 'react';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import TableStyled from './TableStyled';

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

interface TableBodyTypes {
  headData: string[];
  bodyData: BodyData[];
}

const Table = ({ headData, bodyData }: TableBodyTypes) => (
  <TableStyled>
    <TableHead
      headData={headData}
    />
    <TableBody
      bodyData={bodyData}
    />
  </TableStyled>
);

export default Table;
