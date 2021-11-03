import React from 'react';
import AddBookForm from '../../components/shared/Forms/AddBookForm/AddBookForm';
import { PageContainer } from '../../components/shared/GlobalStyle';

function CreateBook() {
  return (
    <PageContainer>
      <AddBookForm />
    </PageContainer>
  );
}

export default CreateBook;
