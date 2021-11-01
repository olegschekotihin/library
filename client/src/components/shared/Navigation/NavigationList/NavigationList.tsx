import React from 'react';
import { NavigationLink } from '../NavigationLink';
import NavigationListStyled from './NavigationListStyled';

type DataTypes = {
  name: string,
  path: string
}

interface NavigationListTypes {
  data: DataTypes[],
}

const NavigationList = ({ data }: NavigationListTypes) => (
  <NavigationListStyled>
    {data.map((link: any) => (
      <li key={link.name}>
        <NavigationLink
          path={link.path}
          name={link.name}
        />
      </li>
    ))}
  </NavigationListStyled>
);

export default NavigationList;
