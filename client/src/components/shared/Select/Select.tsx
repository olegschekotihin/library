import React from 'react';
import { SelectStyled } from './SelectStyled';

type optionsValues = {
  firstName: string,
  lastName: string,
}

interface PropsValues {
  optionsData: optionsValues[];
  defaultValue: string;
  data: any;
  required: boolean;
}

/**
 * Component for showing styled select
 *
 * @param props
 * @constructor
 */

function Select(props: PropsValues) {
  const {
    optionsData,
    defaultValue,
    ...other
  } = props;

  return (
    <SelectStyled defaultValue="" {...other.data} {...other.required}>
      <option
        value=""
        disabled
      >
        {defaultValue}
      </option>
      {optionsData.map((optionElem: any) => (
        <option
          value={optionElem.id}
          key={optionElem.id}
        >
          {`${optionElem.firstName} ${optionElem.lastName}`}
        </option>
      ))}
    </SelectStyled>
  );
}

export default Select;
