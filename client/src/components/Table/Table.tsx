import React, { useEffect, useState } from 'react';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import TableStyled from './TableStyled';
import { Pagination } from '../Pagination';
import { TABLE_CONTENT } from '../../const';

type HeadData = {
  firstName?: string,
  lastName?: string,
  birthDate?: string,
  countryOfBirth?: string,
  code?: string,
  author?: string,
  pageCount?: string,
  publicationDate?: string,
}

type BodyData = {
  id: string,
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
  currentElem?: string | undefined,
}

type EventValue = {
  target:
    {
      value: React.SetStateAction<string>,
      dataset:
      {
        name: React.SetStateAction<string>,
      }
    },
}

interface TableBodyProps {
  headData: HeadData[];
  bodyData: BodyData[];
  numberOfPost: number;
  tableType: string;
}

/**
 * Component for showing responsive table
 *
 * @param props
 * @constructor
 */

const Table = (props: TableBodyProps) => {
  const {
    headData,
    bodyData,
    numberOfPost,
    tableType,
  } = props;
  const dataForTableBody = (bodyData.length > 0) ? bodyData : [];
  const { COUNT_POST_IN_TABLE, INITIAL_PAGE_COUNT } = TABLE_CONTENT;
  const [filterDataValue, setFilterDataValue] = useState('');
  const [dataValue, setDataValue] = useState('');
  const [clonedBodyData, setClonedBodyData] = useState(dataForTableBody);
  const [currentPageCount, setCurrentPageCount] = useState(INITIAL_PAGE_COUNT);
  const initDataLength = dataForTableBody.length;
  const [currentDataLength, setCurrentDataLength] = useState(initDataLength);
  const rowInPageCount = numberOfPost || COUNT_POST_IN_TABLE;
  const indexOfLastPost = currentPageCount * rowInPageCount;
  const indexOfFirstPost = indexOfLastPost - rowInPageCount;
  const slicedBodyDataInit = clonedBodyData.slice(indexOfFirstPost, indexOfLastPost);
  const [slicedBodyData, setSlicedBodyData] = useState(slicedBodyDataInit);

  const onFilter = (event: EventValue) => {
    setFilterDataValue(event.target.value);
    setDataValue(event.target.dataset.name);
  };

  const onSort = (event: string) => {
    setClonedBodyData(clonedBodyData.sort(sortByField(event)));
    setSlicedBodyData(clonedBodyData.slice(indexOfFirstPost, indexOfLastPost));
  };

  const onPaginate = (pageNumber: number) => {
    setCurrentPageCount(pageNumber);
  };

  function sortByField(field: string) {
    return function (a: { [x: string]: number; }, b: { [x: string]: number; }) {
      return a[field] > b[field] ? 1 : -1;
    };
  }

  function filterData(dataForFilter: BodyData[]) {
    return (
      dataForFilter.filter((dataForFilterElem: {}) => {
        const keysUser = Object.keys(dataForFilterElem);
        let currentElem;

        keysUser.forEach((elem) => {
          if (elem === dataValue) {
            currentElem = elem;
          }
        });
        if (currentElem && dataForFilterElem[currentElem] === filterDataValue) {
          return dataForFilterElem;
        }
        return false;
      })
    );
  }

  useEffect(() => {
    setClonedBodyData(dataForTableBody);
    setCurrentDataLength(dataForTableBody.length);
  }, [bodyData]);

  useEffect(() => {
    setSlicedBodyData(clonedBodyData.slice(indexOfFirstPost, indexOfLastPost));
  }, [clonedBodyData]);

  useEffect(() => {
    const newClonedData = filterData(dataForTableBody);
    if (newClonedData.length !== 0) {
      setClonedBodyData(newClonedData);
      setCurrentDataLength(newClonedData.length);
    } else {
      setClonedBodyData(dataForTableBody);
      setCurrentDataLength(dataForTableBody.length);
    }
  }, [filterDataValue]);

  useEffect(() => {
    setSlicedBodyData(clonedBodyData.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPageCount]);

  return (
    <>
      <TableStyled>
        <TableHead
          headData={headData}
          onFilter={onFilter}
          onSort={onSort}
        />
        <TableBody
          bodyData={slicedBodyData}
          tableType={tableType}
        />
      </TableStyled>
      <Pagination
        postsPerPage={rowInPageCount}
        totalPosts={currentDataLength}
        onPaginate={onPaginate}
      />
    </>
  );
};

export default Table;
