import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table } from '../../components/Table';
import { BOOK_TABLE_TYPE, TABLE_CONTENT } from '../../const';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { getBooks } from '../../store/actions/bookActions';

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
  books: any,
}

interface BooksProps {
  books: BooksListValues[];
}

/**
 * Page for showing all books
 *
 * @param booksList
 * @constructor
 */

function Books({ books, getBooks }: BooksProps) {
  const { BOOKS_TABLE_HEAD, COUNT_POST_IN_BOOK_TABLE } = TABLE_CONTENT;
  const { t } = useTranslation();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <PageContainer>
      <PageTitle>{t('titles-pages.books-page')}</PageTitle>
      <Table
        headData={BOOKS_TABLE_HEAD}
        bodyData={books}
        tableType={BOOK_TABLE_TYPE}
        numberOfPost={COUNT_POST_IN_BOOK_TABLE}
      />
    </PageContainer>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () => dispatch(getBooks()),
});

const mapStateToProps = (state: BooksStateValues) => ({
  authors: state.authors.authors,
  books: state.books.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
