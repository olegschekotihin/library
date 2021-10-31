import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import TableBodyColumn from '../TableBodyColumn';

interface TableBodyRowTypes {
  rowData: Object
}

const TableBodyRow = ({ rowData }: TableBodyRowTypes) => {
  const { url } = useRouteMatch();
  // console.log('TableBodyRow', rowData);
  return (
    <tr>
      {Object.entries(rowData).map((value) => {
        console.log('entries', value);
        if ((value[0] !== 'id') && (value[0] !== 'author_id')) {
          return (
            <TableBodyColumn
              columnValue={value[1]}
              key={value[1]}
            />
          );
        }
        return false;
      })}
      {
        (rowData.lastName)
        && (
          <td>
            <Link to={`author/${rowData.id}/${rowData.lastName}`}>View more...</Link>
          </td>
        )
      }
      {
        (rowData.title)
        && (
          <td>
            <Link to={`book/${rowData.id}/${rowData.title}`}>View more...</Link>
          </td>
        )
      }
    </tr>
  );
};

export default TableBodyRow;
