import React from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonProps {
  value: string;
  disabled: boolean
}

function Button(props: ButtonProps) {
  const { value, disabled, ...params } = props;
  return (
    <ButtonStyled
      disabled={disabled}
      {...params}
    >
      {value}
    </ButtonStyled>
  );
}

export default Button;
