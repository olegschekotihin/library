import React from 'react';
import { Meta } from '@storybook/react';
import TableBodyColumn  from './index';

export default {
  component: TableBodyColumn,
  title: 'Components/TableBodyColumn',
} as Meta;

export const Primary: React.VFC<{}> = () => <TableBodyColumn primary>Button</TableBodyColumn>;