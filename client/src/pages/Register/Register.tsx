import React from 'react';
import { PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { RegisterForm } from '../../components/Forms/RegisterForm';

const Register = () => {
  const { PAGE_TITLE_REGISTER } = PAGES_TITLE;
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
