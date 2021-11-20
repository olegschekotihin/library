import React from 'react';
import { connect } from 'react-redux';
import {
  useParams,
} from 'react-router-dom';
import { PageContainer, PageTitle } from '../../components/shared/StyledComponents';
import { ADDITIONAL_INFORMATION_CONTENT, AUTHOR_TABLE_TYPE, BOOK_TABLE_TYPE } from '../../const';

type AuthorsListValues = {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
  description: string,
}

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

type AuthorsStateValues = {
  authors: any,
}

type BooksStateValues = {
  authors: any,
}

interface AdditionalProps {
  authors: AuthorsListValues[];
  books: BooksListValues[];
  type: string;
}

interface StateValues {
  books: any;
  authors: any;
  state: AuthorsStateValues[] | BooksStateValues[];
}

/**
 * Page for showing additional information about book or author
 *
 * @param props
 * @constructor
 */

function AdditionalInformation(props: AdditionalProps) {
  const {
    type,
    authors,
    books,
  } = props;
  const { id }: any = useParams();
  const {
    BIRTHDATE,
    ABOUT,
    AUTHOR,
  } = ADDITIONAL_INFORMATION_CONTENT;

  let data: any[] = [];
  if (type === AUTHOR_TABLE_TYPE) {
    data = authors;
  } else if (type === BOOK_TABLE_TYPE) {
    data = books;
  }
  const currentData = data.find((elem: any) => elem.id === +id);
  return (
    <PageContainer>
      {(type === 'author' && currentData)
      && (
        <div>
          <PageTitle>
            {`${currentData.firstName} ${currentData.lastName}`}
          </PageTitle>
          <div>
            <p>
              {`${BIRTHDATE} ${currentData.birthDate}`}
            </p>
            <p>
              {`${ABOUT} ${currentData.description}`}
            </p>
          </div>
        </div>
      )}
      {(type === 'book' && currentData)
      && (
        <div>
          <PageTitle>
            {`${currentData.title}`}
          </PageTitle>
          <div>
            <p>
              {`${AUTHOR} ${currentData.author}`}
            </p>
            <p>
              {`${BIRTHDATE} ${currentData.publicationDate}`}
            </p>
            <p>
              {`${ABOUT} ${currentData.description}`}
            </p>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

const mapStateToProps = (state: StateValues) => ({
  authors: state.authors.authors,
  books: state.books.books,
});

export default connect(mapStateToProps)(AdditionalInformation);
