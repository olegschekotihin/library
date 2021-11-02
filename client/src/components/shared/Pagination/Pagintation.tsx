import React from 'react';
import { PaginateList, PaginateLink } from './PaginationStyled';

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  onPaginate: any
}

const Pagination = ({ postsPerPage, totalPosts, onPaginate }: PaginationProps) => {
  const pageNumbers:number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginateList>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PaginateLink onClick={() => onPaginate(number)} href="#">
              {number}
            </PaginateLink>
          </li>
        ))}
      </PaginateList>
    </nav>
  );
};

export default Pagination;
