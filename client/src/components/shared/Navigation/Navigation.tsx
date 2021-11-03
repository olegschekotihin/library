import React from 'react';
import { NavigationList } from './NavigationList';
import { navigationLinkList } from '../../../const';

function Navigation() {
  return (
    <NavigationList
      data={navigationLinkList}
    />
  );
}

export default Navigation;
