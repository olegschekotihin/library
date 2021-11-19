import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationLink } from '../NavigationLink';
import NavigationListStyled from './NavigationListStyled';

type DataProps = {
  name: string,
  path: string,
}

interface NavigationListProps {
  data: DataProps[];
}

/**
 * Components for showing navigation links
 *
 * @param props
 * @constructor
 */

function NavigationList(props: NavigationListProps) {
  const {
    data,
    ...other
  } = props;
  const { t } = useTranslation(['translation', 'navigation']);

  return (
    <NavigationListStyled>
      {data.map((link: any) => (
        <li key={link.name}>
          <NavigationLink
            path={link.path}
            name={t(link.name, { ns: 'navigation' })}
            {...other}
          />
        </li>
      ))}
    </NavigationListStyled>
  );
}

export default NavigationList;
