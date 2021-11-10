import React from 'react';
import NavigationLinkStyled from './NavigationLinkStyled';

interface NavLinkProps {
  name: string;
  path: string;
}

function NavigationLink(props: NavLinkProps) {
  const { name, path, ...other } = props;
  return (
    <NavigationLinkStyled
      to={path}
      {...other}
    >
      {name}
    </NavigationLinkStyled>
  );
}

export default NavigationLink;
