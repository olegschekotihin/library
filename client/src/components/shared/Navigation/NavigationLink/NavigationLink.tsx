import React from 'react';
import NavigationLinkStyled from './NavigationLinkStyled';

interface NavLinkProps {
  name: string;
  path: string;
}

/**
 * Component for showing link for navigation
 *
 * @param props
 * @constructor
 */

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
