import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PAGES_TEXT } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

/**
 * Template for 404 error(Page not found)
 *
 * @constructor
 */

const PageNotFound = () => {
  const location = useLocation();
  const { PAGE_NO_MATCH_FOR } = PAGES_TEXT;
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.404-page')}</PageTitle>
      <p>
        {`${PAGE_NO_MATCH_FOR} ${location.pathname}`}
      </p>
    </PageContainer>
  );
};

export default PageNotFound;
