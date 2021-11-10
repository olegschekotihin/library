import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table } from '../../components/Table';
import { TABLE_CONTENT, PAGES_TITLE } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';

type BooksListValues = {
  id: string,
  title: string,
  description: string,
  code: string,
  author: string,
  pagesCount: string,
  publicationDate: string,
  authorId: string,
}

type BooksStateValues = {
  authors: any,
}

interface StateTypes {
  books: any;
  state: BooksStateValues[];
}

interface BooksProps {
  booksList: BooksListValues[];
}

function Books({ booksList }: BooksProps) {
  const { BOOKS_TABLE_HEAD, COUNT_POST_IN_BOOK_TABLE } = TABLE_CONTENT;
  const { PAGE_TITLE_BOOKS } = PAGES_TITLE;
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <PageTitle>{t('titlesPages.booksPage')}</PageTitle>
      <Table
        headData={BOOKS_TABLE_HEAD}
        bodyData={booksList}
        numberOfPost={COUNT_POST_IN_BOOK_TABLE}
      />
    </PageContainer>
  );
}

const mapStateToProps = (state: StateTypes) => ({
  booksList: state.books.books,
});

export default connect(mapStateToProps)(Books);
