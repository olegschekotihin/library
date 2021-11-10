import React from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonProps {
  value: string;
  disabled: boolean
}

function Button(props: ButtonProps) {
  const { value, disabled, ...other } = props;
  return (
    <ButtonStyled
      {...other}
    >
      {value}
    </ButtonStyled>
  );
}

export default Button;
