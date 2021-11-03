import React from 'react';
import { PaginateList, PaginateLink } from './PaginationStyled';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  onPaginate: any;
}

function Pagination({ postsPerPage, totalPosts, onPaginate }: PaginationProps) {
  const countPageNumber = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = Array.from({ length: countPageNumber }, (_, index) => index + 1);

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
}

export default Pagination;
