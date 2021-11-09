import React from 'react';
import { FilterWrapper, InputFilter } from './TableHeadFilterStyled';
import { TABLE_CONTENT } from '../../../../const';

interface InputProps {
  onchange: () => void;
  dataAttr: string;
  title: string;
}

function TableHeadFilter(props: InputProps) {
  const {
    onchange,
    title,
    dataAttr,
    ...params
  } = props;

  const { FILTER_TABLE } = TABLE_CONTENT;
  return (
    <FilterWrapper>
      {`${FILTER_TABLE} ${title}`}
      <InputFilter
        type="text"
        onChange={onchange}
        data-name={dataAttr}
        {...params}
      />
    </FilterWrapper>
  );
}

export default TableHeadFilter;
