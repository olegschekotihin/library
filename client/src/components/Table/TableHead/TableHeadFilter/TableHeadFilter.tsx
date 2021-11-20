import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterWrapper, InputFilter } from './TableHeadFilterStyled';

interface InputProps {
  onchange: () => void;
  dataAttr: string;
  title: string;
}

/**
 * Component for showing filter input in table head
 *
 * @param props
 * @constructor
 */

function TableHeadFilter(props: InputProps) {
  const {
    onchange,
    title,
    dataAttr,
    ...other
  } = props;
  const { t } = useTranslation();

  return (
    <FilterWrapper>
      {`${t('form-content.filter-by')} ${title}`}
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
