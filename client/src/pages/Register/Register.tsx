import React from 'react';
import { useTranslation } from 'react-i18next';
import { PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { RegisterForm } from '../../components/Forms/RegisterForm';

const Register = () => {
  const { PAGE_TITLE_REGISTER } = PAGES_TITLE;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.registerPage')}</PageTitle>
      <RegisterForm />
    </PageContainer>
  );
};

export default Register;
