import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { PAGES_TEXT, PAGE_TITLE} from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';

const PageNotFound = () => {
  const location = useLocation();
  const { PAGE_TITLE_NOT_FOUND } = PAGE_TITLE;
  const { PAGE_NO_MATCH_FOR } = PAGES_TEXT;

  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_NOT_FOUND }</PageTitle>
      <p>
        {`${PAGE_NO_MATCH_FOR} ${location.pathname}`}
      </p>
    </PageContainer>
  );
};

export default PageNotFound;
