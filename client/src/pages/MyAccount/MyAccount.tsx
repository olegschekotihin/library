import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { UserAccount } from '../../components/UserAccount';

/**
 * Page for showing user account page
 *
 * @constructor
 */

const MyAccount = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.user-account-page')}</PageTitle>
      <UserAccount />
    </PageContainer>
  );
};

export default MyAccount;
