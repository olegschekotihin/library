import React from 'react';
import { pageTitle } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { RegisterForm } from '../../components/shared/Form/RegisterForm';

const Register = () => {
  const { PAGE_TITLE_REGISTER } = pageTitle;
  return (
    <PageContainer>
      <PageTitle>
        { PAGE_TITLE_REGISTER }
      </PageTitle>
      <RegisterForm />
    </PageContainer>
  );
};

export default Register;
