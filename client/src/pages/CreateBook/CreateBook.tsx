import React from 'react';
import { useTranslation } from 'react-i18next';
import AddBookForm from '../../components/Forms/AddBookForm/AddBookForm';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { PAGES_TITLE } from '../../const';

function CreateBook() {
  const { PAGE_TITLE_ADD_BOOK } = PAGES_TITLE;
  const { PAGE_TITLE_HOME } = PAGES_TITLE;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.addBookPage')}</PageTitle>
      <AddBookForm />
    </PageContainer>
  );
}

export default CreateBook;
