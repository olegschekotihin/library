import React from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonProps {
  value: string;
  modify?: boolean;
  onClick: () => void;
}

/**
 * Component for showing button
 *
 * @param props
 * @constructor
 */

function Button(props: ButtonProps) {
  const { value, onClick, ...other } = props;
  return (
    <ButtonStyled
      onClick={onClick}
      {...other}
    >
      {value}
    </ButtonStyled>
  );
}

export default Button;
