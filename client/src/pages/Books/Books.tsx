import React from 'react';
import { connect } from 'react-redux';
import { Table } from '../../components/shared/Table';
import { TABLE_CONTENT, PAGE_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';

type booksListTypes = {
  id: string,
  title: string,
  description: string,
  code: string,
  author: string,
  pagesCount: string,
  publicationDate: string,
  authorId: string,
}

type BooksStateTypes = {
  authors: any,
}

interface BooksTypes {
  booksList: booksListTypes[];
}

interface StateTypes {
  booksState: any;
  state: BooksStateTypes[];
}

function Books({ booksList }: BooksTypes) {
  const { BOOKS_TABLE_HEAD } = TABLE_CONTENT;
  const { PAGE_TITLE_BOOKS } = PAGE_TITLE;

  return (
    <PageContainer>
      <PageTitle>{ PAGE_TITLE_BOOKS }</PageTitle>
      <Table
        headData={BOOKS_TABLE_HEAD}
        bodyData={booksList}
        numberOfPost={8}
      />
    </PageContainer>
  );
}

const mapStateToProps = (state: StateTypes) => ({
  booksList: state.booksState.books,
});

export default connect(mapStateToProps)(Books);
