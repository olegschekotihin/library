import React from 'react';
import AddAuthorForm from '../../components/Forms/AddAuthorForm/AddAuthorForm';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { PAGES_TITLE } from '../../const';

function CreateAuthor() {
  const { PAGE_TITLE_ADD_AUTHOR } = PAGES_TITLE;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_ADD_AUTHOR }</PageTitle>
      <AddAuthorForm />
    </PageContainer>
  );
}

export default CreateAuthor;
