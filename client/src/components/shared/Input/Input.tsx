import React from 'react';
import InputStyled from './InputStyled';

interface InputTypes {
  type: string;
  placeholder: string;
  name: string;
}

function Input({ type, name, placeholder }: InputTypes) {
  return (
    <InputStyled
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
