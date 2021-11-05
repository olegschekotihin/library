import React from 'react';
import { PAGE_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';

function Home() {
  const { PAGE_TITLE_HOME } = PAGE_TITLE;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_HOME }</PageTitle>
    </PageContainer>
  );
}

export default Home;
