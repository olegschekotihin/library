import React from 'react';
import { Meta } from '@storybook/react';
import ButtonStyled from './ButtonStyled';
import { Button } from './index';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Button value="Button">
    <ButtonStyled>
      Button
    </ButtonStyled>
  </Button>
);
