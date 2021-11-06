import React from 'react';
import { Meta } from '@storybook/react';
import { NavigationList } from './index';
import NavigationListStyled from './NavigationListStyled';
import { NAVIGATION_LINK_LIST } from '../../../../const';
import { Router } from 'react-router-dom';

export default {
  component: NavigationList,
  title: 'Components/NavigationList',
} as Meta;

export const Primary: React.VFC<{}> = () => {
  return (
    <Router>
      <NavigationListStyled data={NAVIGATION_LINK_LIST} />
    </Router>
  );
};
