import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { FormStyled, PageContainerSmall } from '../../GlobalStyle';

const LoginForm = () => (
  <PageContainerSmall>
    <FormStyled>
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button value="Send" />
    </FormStyled>
  </PageContainerSmall>
);

export default LoginForm;
