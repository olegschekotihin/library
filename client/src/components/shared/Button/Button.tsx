import React from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonTypes {
  value: string;
}

const Button = ({ value }: ButtonTypes) => {

  return (
    <ButtonStyled>
      {value}
    </ButtonStyled>
  );
};

export default Button;
