import React from 'react';
import { connect } from 'react-redux';
import { Table } from '../../components/Table';
import { TABLE_CONTENT, PAGE_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';

type AuthorsStateTypes = {
  authors: any,
}

type authorsListTypes = {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
  description: string,
}

interface AuthorsTypes {
  authorsList: authorsListTypes[];
}

interface StateTypes {
  authorsState: any;
  state: AuthorsStateTypes[];
}

function Authors({ authorsList }: AuthorsTypes) {
  const { AUTHORS_TABLE_HEAD } = TABLE_CONTENT;
  const { PAGE_TITLE_AUTHORS } = PAGE_TITLE;

  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_AUTHORS }</PageTitle>
      <Table
        headData={AUTHORS_TABLE_HEAD}
        bodyData={authorsList}
        numberOfPost={2}
      />
    </PageContainer>
  );
}

const mapStateToProps = (state: StateTypes) => ({
  authorsList: state.authorsState.authors,
});

export default connect(mapStateToProps)(Authors);
