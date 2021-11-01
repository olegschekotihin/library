import React from 'react';
import { NavigationList } from './NavigationList';
import { navigationLinkList } from '../../../const';

const Navigation = () => (
  <NavigationList
    data={navigationLinkList}
  />
);

export default Navigation;
