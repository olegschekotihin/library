import React from 'react';
import AddBookForm from '../../components/shared/Forms/AddBookForm/AddBookForm';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { PAGE_TITLE } from '../../const';

function CreateBook() {
  const { PAGE_TITLE_ADD_BOOK } = PAGE_TITLE;
  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_ADD_BOOK }</PageTitle>
      <AddBookForm />
    </PageContainer>
  );
}

export default CreateBook;
