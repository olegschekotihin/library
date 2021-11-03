import React from 'react';
import { FormStyled } from '../../GlobalStyle';
import { Input } from '../Input';
import { Button } from '../Button';

function CreateAuthorForm() {
  return (
    <FormStyled>
      <Input
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <Input
        name="birthDate"
        type="text"
        placeholder="Birth Date"
      />
      <Input
        name="countryOfBirth"
        type="text"
        placeholder="Country of birth"
      />
      <Button value="Send" />
    </FormStyled>
  );
}

export default CreateAuthorForm;
