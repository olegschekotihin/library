import React from 'react';
import { InputStyled } from './InputStyled';

interface InputProps {
  type: string;
  placeholder: string,
  data: any;
}

/**
 * Component for showing input
 *
 * @param props
 * @constructor
 */

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
