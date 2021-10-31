import React from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkTypes {
  name: string,
  path: string
}

const NavigationLink = ({ name, path }:NavLinkTypes) => (
  <Link to={path}>
    {name}
  </Link>
);

export default NavigationLink;
