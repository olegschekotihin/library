import React from 'react';
import TableBodyRow from './TableBodyRow';

export interface TableBodyTypes {
  bodyData: Array<Object>,
}

const TableBody = ({ bodyData }: TableBodyTypes) => {
  console.log('Table body');
  return (
    <tbody>
      { bodyData.map((rowData):Object => {
        console.log('rowData', rowData);
        return (
          <TableBodyRow
            rowData={rowData}
            key={rowData.id}
          />
        );
      }) }
    </tbody>
  );
};

export default TableBody;
