import React from 'react';
import { useLocation } from 'react-router-dom';
import { PAGES_TEXT, PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import {useTranslation} from "react-i18next";

const PageNotFound = () => {
  const location = useLocation();
  const { PAGE_TITLE_NOT_FOUND } = PAGES_TITLE;
  const { PAGE_NO_MATCH_FOR } = PAGES_TEXT;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.404Page')}</PageTitle>
      <p>
        {`${PAGE_NO_MATCH_FOR} ${location.pathname}`}
      </p>
    </PageContainer>
  );
};

export default PageNotFound;
