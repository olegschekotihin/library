import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterWrapper, InputFilter } from './TableHeadFilterStyled';

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
    ...other
  } = props;
  const { t, i18n } = useTranslation();

  return (
    <FilterWrapper>
      {`${t('formContent.filterBy')} ${title}`}
      <InputFilter
        type="text"
        onChange={onchange}
        data-name={dataAttr}
        {...other}
      />
    </FilterWrapper>
  );
}

export default TableHeadFilter;
