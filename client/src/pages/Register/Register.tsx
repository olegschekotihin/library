import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { RegisterForm } from '../../components/Forms/RegisterForm';

/**
 * Page for showing register form
 *
 * @constructor
 */

const Register = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.register-page')}</PageTitle>
      <RegisterForm />
    </PageContainer>
  );
};

export default Register;
