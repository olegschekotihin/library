import React from 'react';

export interface TableHeadColumnTypes {
  name: string
}

const TableHeadColumn = ({ name }:TableHeadColumnTypes) => {
  console.log('Name', name);
  return (
    <th>{name}</th>
  );
};
export default TableHeadColumn;
