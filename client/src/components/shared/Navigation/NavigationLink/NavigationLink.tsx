import React from 'react';
import NavigationLinkStyled from './NavigationLinkStyled';

interface NavLinkProps {
  name: string;
  path: string;
}

function NavigationLink(props: NavLinkProps) {
  const { name, path, ...params } = props;
  return (
    <NavigationLinkStyled
      to={path}
      {...params}
    >
      {name}
    </NavigationLinkStyled>
  );
}

export default NavigationLink;
