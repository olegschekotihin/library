import React from 'react';
import { NavigationList } from './NavigationList';
import { NAVIGATION_LINK_LIST } from '../../../const';

function Navigation() {
  return (
    <NavigationList
      data={NAVIGATION_LINK_LIST}
    />
  );
}

export default Navigation;
