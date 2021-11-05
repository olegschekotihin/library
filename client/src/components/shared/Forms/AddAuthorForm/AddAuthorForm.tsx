import React from 'react';
import { FormStyled, PageContainerSmall } from '../../GlobalStyle';
import { Input } from '../../Input';
import { Button } from '../../Button';

function AddAuthorForm() {
  return (
    <PageContainerSmall>
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
        <Button value="Add author" />
      </FormStyled>
    </PageContainerSmall>
  );
}

export default AddAuthorForm;
