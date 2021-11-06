import React from 'react';
import { Meta } from '@storybook/react';
import Pagination from './Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Pagination postsPerPage={5} totalPosts={25} onPaginate={() => false} />
);
