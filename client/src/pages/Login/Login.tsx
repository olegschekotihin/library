import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { LoginForm } from '../../components/Forms/LoginForm';

const Login = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.loginPage')}</PageTitle>
      <LoginForm />
    </PageContainer>
  );
};

export default Login;
