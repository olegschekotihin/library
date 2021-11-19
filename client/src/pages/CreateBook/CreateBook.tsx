import React from 'react';
import { useTranslation } from 'react-i18next';
import AddBookForm from '../../components/Forms/AddBookForm/AddBookForm';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

/**
 * Page for added new book
 *
 * @constructor
 */

function CreateBook() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.add-book-page')}</PageTitle>
      <AddBookForm />
    </PageContainer>
  );
}

export default CreateBook;
