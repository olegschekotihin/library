import React, { useEffect, useState } from 'react';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import TableStyled from './TableStyled';
import { Pagination } from '../Pagination';

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
  headData: HeadData[];
  bodyData: BodyData[];
  numberOfPost: number;
}

const Table = ({ headData, bodyData, numberOfPost }: TableBodyTypes) => {
  const [filterDataValue, setFilterDataValue] = useState('');
  const [dataValue, setDataValue] = useState('');
  const [clonedBodyData, setClonedBodyData] = useState(bodyData);
  const [currentPageCount, setCurrentPageCount] = useState(1);
  const initDataLength = bodyData.length;
  const [currentDataLength, setCurrentDataLength] = useState(initDataLength);
  const rowInPageCount = numberOfPost || 10;
  const indexOfLastPost = currentPageCount * rowInPageCount;
  const indexOfFirstPost = indexOfLastPost - rowInPageCount;
  const slicedBodyDataInit = clonedBodyData.slice(indexOfFirstPost, indexOfLastPost);
  const [slicedBodyData, setSlicedBodyData] = useState(slicedBodyDataInit);

  const onChange = (event) => {
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

  function filterData(bodyData) {
    return (
      bodyData.filter((bodyDataElem: {}) => {
        const keysUser = Object.keys(bodyDataElem);
        let currentElem: any;

        keysUser.forEach((elem) => {
          if (elem === dataValue) {
            currentElem = elem;
          }
        });
        if (bodyDataElem[currentElem] === filterDataValue) {
          return bodyDataElem;
        }
        return false;
      })
    );
  }

  useEffect(() => {
    setClonedBodyData(bodyData);
    setCurrentDataLength(bodyData.length);
  }, [bodyData]);

  useEffect(() => {
    setSlicedBodyData(clonedBodyData.slice(indexOfFirstPost, indexOfLastPost));
  }, [clonedBodyData]);

  useEffect(() => {
    const newClonedData = filterData(bodyData);
    if (newClonedData.length !== 0) {
      setClonedBodyData(newClonedData);
      setCurrentDataLength(newClonedData.length);
    } else {
      setClonedBodyData(bodyData);
      setCurrentDataLength(bodyData.length);
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
          onChange={onChange}
          onSort={onSort}
        />
        <TableBody
          bodyData={slicedBodyData}
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
