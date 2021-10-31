import React from 'react';

interface TableBodyColumnTypes {
  columnValue: string | number
}

const TableBodyColumn = ({ columnValue }: TableBodyColumnTypes) => {
  console.log('TableBodyColumn');
  return (
    <td>{columnValue}</td>
  );
};

export default TableBodyColumn;
