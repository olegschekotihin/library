import React from 'react';
import { useTranslation } from 'react-i18next';
import AddAuthorForm from '../../components/Forms/AddAuthorForm/AddAuthorForm';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

/**
 * Page for added new author
 *
 * @constructor
 */

function CreateAuthor() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.add-author-page')}</PageTitle>
      <AddAuthorForm />
    </PageContainer>
  );
}

export default CreateAuthor;
