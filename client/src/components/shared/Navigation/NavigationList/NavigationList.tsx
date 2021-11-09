import React from 'react';
import { NavigationLink } from '../NavigationLink';
import NavigationListStyled from './NavigationListStyled';

type DataProps = {
  name: string,
  path: string,
}

interface NavigationListProps {
  data: DataProps[];
}

function NavigationList(props: NavigationListProps) {
  const {
    data,
    ...params
  } = props;

  return (
    <NavigationListStyled>
      {data.map((link: any) => (
        <li key={link.name}>
          <NavigationLink
            path={link.path}
            name={link.name}
            {...params}
          />
        </li>
      ))}
    </NavigationListStyled>
  );
}

export default NavigationList;
