import React from 'react';
import { FormStyled, PageContainerSmall } from '../../shared/GlobalStyle';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';

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
