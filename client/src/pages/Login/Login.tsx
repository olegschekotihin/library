import React from 'react';
import { PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { LoginForm } from '../../components/Forms/LoginForm';

const Login = () => {
  const { PAGE_TITLE_LOGIN } = PAGES_TITLE;
  return (
    <PageContainer>
      <PageTitle>
        { PAGE_TITLE_LOGIN }
      </PageTitle>
      <LoginForm />
    </PageContainer>
  );
};

export default Login;
