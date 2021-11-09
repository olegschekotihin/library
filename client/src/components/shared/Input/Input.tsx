import React from 'react';
import { InputStyled } from './InputStyled';

interface InputProps {
  type: string;
  placeholder: string,
  data: any;
}

function Input(props: InputProps) {
  const {
    type,
    placeholder,
    data,
    ...other
  } = props;
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      {...data}
      {...other}
    />
  );
}

export default Input;
