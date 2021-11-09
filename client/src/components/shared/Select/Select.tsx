import React from 'react';
import { SelectStyled } from './SelectStyled';

type optionsValues = {
  firstName: string,
  lastName: string,
}

interface PropsValues {
  optionsData: optionsValues[];
  defaultValue: string;
}

function Select(props: PropsValues) {
  const {
    optionsData,
    defaultValue,
  } = props;

  return (
    <SelectStyled defaultValue="Default">
      <option value="Default" disabled>{defaultValue}</option>
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
