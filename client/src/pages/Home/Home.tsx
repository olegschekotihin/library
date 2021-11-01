import React from 'react';
import { pageTitle } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';

const Home = () => {
  const { PAGE_TITLE_HOME } = pageTitle;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_HOME }</PageTitle>
    </PageContainer>
  );
};

export default Home;
