import React from 'react';
import { pageTitle } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { LoginForm } from '../../components/shared/Form/LoginForm';

const Login = () => {
  const { PAGE_TITLE_LOGIN } = pageTitle;
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
