import React from 'react';
import { Meta } from '@storybook/react';
import Input from './Input';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Input type="text" placeholder="example field" name="exField" />
);
