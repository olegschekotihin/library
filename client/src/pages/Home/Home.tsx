import React from 'react';
import { useTranslation } from 'react-i18next';
import { PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

function Home() {
  const { PAGE_TITLE_HOME } = PAGES_TITLE;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.homePage')}</PageTitle>
    </PageContainer>
  );
}

export default Home;
