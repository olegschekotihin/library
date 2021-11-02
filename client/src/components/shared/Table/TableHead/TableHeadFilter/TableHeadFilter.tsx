import React from 'react';
import { InputFilter } from './TableHeadFilterStyled';

interface InputProps {
  onchange: () => void;
  dataAttr: string;
}

function TableHeadFilter({ onchange, dataAttr }: InputProps) {
  return (
    <div>
      <InputFilter
        type="text"
        onChange={onchange}
        data-name={dataAttr}
      />
    </div>
  );
}

export default TableHeadFilter;
