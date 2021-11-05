import React from 'react';
import NavigationLinkStyled from './NavigationLinkStyled';

interface NavLinkTypes {
  name: string;
  path: string;
}

function NavigationLink({ name, path }: NavLinkTypes) {
  return (
    <NavigationLinkStyled to={path}>
      {name}
    </NavigationLinkStyled>
  );
}

export default NavigationLink;
