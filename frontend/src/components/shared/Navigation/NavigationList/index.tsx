import React from 'react';
import NavigationLink from '../NavigationLink';

export interface linkListTypes {
  data: Array<Object>
}

const NavigationList = ({ data }:linkListTypes) => (
  <ul>
    {data.map((link: any) => (
      <li key={link.name}>
        <NavigationLink
          path={link.path}
          name={link.name}
        />
      </li>
    ))}
  </ul>
);

export default NavigationList;
