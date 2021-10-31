import React from 'react';
import {connect} from 'react-redux';
import Table from '../../components/shared/Table';

interface BooksTypes {
  books: Array<Object>
}

const booksHeadTableData = {
  title: 'Title',
  description: 'Description',
  code: 'Code',
  author: 'Author',
  pagesCount: 'Pages count',
  publicationDate: 'Publication date/year',
};

const Books = ({ books }: BooksTypes) => {
  console.log('Books table');
  return (
    <div>
      <h3>Books</h3>
      <Table
        headData={booksHeadTableData}
        bodyData={books}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksState.books,
});

export default connect(mapStateToProps)(Books);

// export default Books;
