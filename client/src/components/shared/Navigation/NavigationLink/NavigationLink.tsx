import React from 'react';
import NavigationLinkStyled from './NavigationLinkStyled';

export interface NavLinkTypes {
  name: string,
  path: string
}

const NavigationLink = ({ name, path }: NavLinkTypes) => (
  <NavigationLinkStyled to={path}>
    {name}
  </NavigationLinkStyled>
);

export default NavigationLink;
