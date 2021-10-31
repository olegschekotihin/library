import React from 'react';
import { Meta } from '@storybook/react';
import NavigationLink from './index';

export default {
  component: NavigationLink,
  title: 'Components/NavigationLink',
} as Meta;

export const Primary: React.VFC<{}> = () => <NavigationLink name="Example" path="/example" />;
