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
  const [clonedBodyData, setClonedBodyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const initDataLength = bodyData.length;
  const [currentDataLength, setCurrentDataLength] = useState(initDataLength);

  const rowInPage: number = numberOfPost || 10;
  const indexOfLastPost = currentPage * rowInPage;
  const indexOfFirstPost = indexOfLastPost - rowInPage;
  const slicedBodyData = clonedBodyData.slice(indexOfFirstPost, indexOfLastPost);

  const onChange = (event:any) => {
    setFilterDataValue(event.target.value);
    setDataValue(event.target.dataset.name);
  };

  const onPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filter = (bodyData) => {
    const filteredBodyData = bodyData.filter((user) => {
      const keysUser = Object.keys(user);
      let currentElem:any;

      keysUser.forEach((elem) => {
        if (elem === dataValue) {
          currentElem = elem;
        }
      });
      if (user[currentElem] === filterDataValue) {
        return user;
      }
      return false;
    });

    return filteredBodyData;
  };

  useEffect(() => {
    setClonedBodyData(bodyData);
    setCurrentDataLength(bodyData.length);
  }, [bodyData]);

  useEffect(() => {
    const newClonedData = filter(bodyData);
    if (newClonedData.length !== 0) {
      setClonedBodyData(newClonedData);
      setCurrentDataLength(newClonedData.length);
    } else {
      setClonedBodyData(bodyData);
      setCurrentDataLength(bodyData.length);
    }
  }, [filterDataValue]);


  return (
    <>
      <TableStyled>
        <TableHead
          headData={headData}
          onChange={onChange}
        />
        <TableBody
          bodyData={slicedBodyData}
        />
      </TableStyled>
      <Pagination
        postsPerPage={rowInPage}
        totalPosts={currentDataLength}
        onPaginate={onPaginate}
      />
    </>
  );
};

export default Table;
