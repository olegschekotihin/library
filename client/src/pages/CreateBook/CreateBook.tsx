import React from 'react';
import AddBookForm from '../../components/Forms/AddBookForm/AddBookForm';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { PAGES_TITLE } from '../../const';

function CreateBook() {
  const { PAGE_TITLE_ADD_BOOK } = PAGES_TITLE;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_ADD_BOOK }</PageTitle>
      <AddBookForm />
    </PageContainer>
  );
}

export default CreateBook;
