import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table } from '../../components/Table';
import { TABLE_CONTENT, PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

type AuthorsStateValues = {
  authors: any,
}

type AuthorsListValues = {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
  description: string,
}

interface AuthorsProps {
  authorsList: AuthorsListValues[];
}

interface StateValues {
  authors: any;
  state: AuthorsStateValues[];
}

function Authors({ authorsList }: AuthorsProps) {
  const { AUTHORS_TABLE_HEAD, COUNT_POST_IN_AUTHOR_TABLE } = TABLE_CONTENT;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.authorsPage')}</PageTitle>
      <Table
        headData={AUTHORS_TABLE_HEAD}
        bodyData={authorsList}
        numberOfPost={COUNT_POST_IN_AUTHOR_TABLE}
      />
    </PageContainer>
  );
}

const mapStateToProps = (state: StateValues) => ({
  authorsList: state.authors.authors,
});

export default connect(mapStateToProps)(Authors);
