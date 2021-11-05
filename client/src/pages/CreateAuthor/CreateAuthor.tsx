import React from 'react';
import AddAuthorForm from '../../components/shared/Forms/AddAuthorForm/AddAuthorForm';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { PAGE_TITLE } from '../../const';

function CreateAuthor() {
  const { PAGE_TITLE_ADD_AUTHOR } = PAGE_TITLE;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_ADD_AUTHOR }</PageTitle>
      <AddAuthorForm />
    </PageContainer>
  );
}

export default CreateAuthor;
