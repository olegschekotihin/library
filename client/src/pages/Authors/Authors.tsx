import React from 'react';
import { connect } from 'react-redux';
import { Table } from '../../components/shared/Table';
import { tableContent, pageTitle } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';

type AuthorsStateTypes = {
  authors: any
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
  authorsList: authorsListTypes[],
}

interface StateTypes {
  authorsState: any;
  state: AuthorsStateTypes[];
}

const Authors = ({ authorsList }: AuthorsTypes) => {
  const { AUTHORS_TABLE_HEAD } = tableContent;
  const { PAGE_TITLE_AUTHORS } = pageTitle;

  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_AUTHORS }</PageTitle>
      <Table
        headData={AUTHORS_TABLE_HEAD}
        bodyData={authorsList}
      />
    </PageContainer>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  authorsList: state.authorsState.authors,
});

export default connect(mapStateToProps)(Authors);
