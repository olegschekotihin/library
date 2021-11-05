import React from 'react';
import { PAGE_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { RegisterForm } from '../../components/Forms/RegisterForm';

const Register = () => {
  const { PAGE_TITLE_REGISTER } = PAGE_TITLE;
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
