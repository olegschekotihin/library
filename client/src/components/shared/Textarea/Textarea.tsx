import React from 'react';
import { TextareaStyled } from './TextareaStyled';

interface TextareaProps {
  placeholder: string;
  data: any;
}

function Textarea(props: TextareaProps) {
  const {
    placeholder,
    data,
    ...other
  } = props;

  return (
    <TextareaStyled
      placeholder={placeholder}
      {...data}
      {...other}
    />
  );
}

export default Textarea;
