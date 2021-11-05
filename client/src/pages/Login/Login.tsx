import React from 'react';
import { PAGE_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { LoginForm } from '../../components/Forms/LoginForm';

const Login = () => {
  const { PAGE_TITLE_LOGIN } = PAGE_TITLE;
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
