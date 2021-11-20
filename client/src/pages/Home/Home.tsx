import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

/**
 * Home page
 *
 * @constructor
 */

function Home() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.home-page')}</PageTitle>
    </PageContainer>
  );
}

export default Home;
