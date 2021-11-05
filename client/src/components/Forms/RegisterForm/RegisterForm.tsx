import React from 'react';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { FormStyled, PageContainerSmall } from '../../shared/GlobalStyle';

function RegisterForm() {
  return (
    <PageContainerSmall>
      <FormStyled>
        <Input
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button value="Send" />
      </FormStyled>
    </PageContainerSmall>
  );
}

export default RegisterForm;
