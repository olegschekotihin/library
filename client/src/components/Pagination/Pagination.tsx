import React from 'react';
import { PaginateList, PaginateLink } from './PaginationStyled';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  onPaginate: (number: number) => void;
}

/**
 * Component for showing pagination
 *
 * @param props
 * @constructor
 */

function Pagination(props: PaginationProps) {
  const {
    postsPerPage,
    totalPosts,
    onPaginate,
    ...other
  } = props;
  const pageCount = Math.ceil(totalPosts / postsPerPage);
  const paginationCount = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav>
      <PaginateList>
        {paginationCount.map((number) => (
          <li key={number}>
            <PaginateLink
              onClick={() => onPaginate(number)}
              href="#"
              {...other}
            >
              {number}
            </PaginateLink>
          </li>
        ))}
      </PaginateList>
    </nav>
  );
}

export default Pagination;
