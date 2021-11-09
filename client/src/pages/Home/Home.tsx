import React from 'react';
import { PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

function Home() {
  const { PAGE_TITLE_HOME } = PAGES_TITLE;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_HOME }</PageTitle>
    </PageContainer>
  );
}

export default Home;
