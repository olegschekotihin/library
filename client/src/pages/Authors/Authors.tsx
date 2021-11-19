import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table } from '../../components/Table';
import { AUTHOR_TABLE_TYPE, TABLE_CONTENT } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { getAuthors } from '../../store/actions/authorActions';

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
  authors: AuthorsListValues[];
}

interface StateValues {
  authors: any;
  state: AuthorsStateValues[];
}

/**
 * Page for showing all authors
 *
 * @param authorsList
 * @constructor
 */

function Authors({ authors, getAuthors }: AuthorsProps) {
  const { AUTHORS_TABLE_HEAD, COUNT_POST_IN_AUTHOR_TABLE } = TABLE_CONTENT;
  const { t } = useTranslation();

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.authors-page')}</PageTitle>
      <Table
        headData={AUTHORS_TABLE_HEAD}
        bodyData={authors}
        tableType={AUTHOR_TABLE_TYPE}
        numberOfPost={COUNT_POST_IN_AUTHOR_TABLE}
      />
    </PageContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getAuthors: () => dispatch(getAuthors()),
});

const mapStateToProps = (state: StateValues) => ({
  authors: state.authors.authors,
});

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
