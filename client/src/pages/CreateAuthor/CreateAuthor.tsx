import React from 'react';
import { useTranslation } from 'react-i18next';
import AddAuthorForm from '../../components/Forms/AddAuthorForm/AddAuthorForm';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { PAGES_TITLE } from '../../const';

function CreateAuthor() {
  const { PAGE_TITLE_ADD_AUTHOR } = PAGES_TITLE;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.addAuthorPage')}</PageTitle>
      <AddAuthorForm />
    </PageContainer>
  );
}

export default CreateAuthor;
