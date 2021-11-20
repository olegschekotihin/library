import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { LoginForm } from '../../components/Forms/LoginForm';

/**
 * Page for showing login form
 *
 * @constructor
 */

const Login = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.login-page')}</PageTitle>
      <LoginForm />
    </PageContainer>
  );
};

export default Login;
