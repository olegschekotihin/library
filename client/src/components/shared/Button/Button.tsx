import React from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonTypes {
  value: string;
}

function Button({ value }: ButtonTypes) {
  return (
    <ButtonStyled>
      {value}
    </ButtonStyled>
  );
}

export default Button;
