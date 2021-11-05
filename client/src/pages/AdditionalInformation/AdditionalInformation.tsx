import React from 'react';
import { connect } from 'react-redux';
import {
  useParams,
} from 'react-router-dom';
import { PageContainer, PageTitle } from '../../components/shared/GlobalStyle';
import { ADDITIONAL_INFORMATION_CONTENT } from '../../const';

type authorsListTypes = {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
  description: string,
}

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

type AuthorsStateTypes = {
  authors: any,
}

type BooksStateTypes = {
  authors: any,
}

interface AdditionalTypes {
  authorsList: authorsListTypes[];
  booksList: booksListTypes[];
  type: string;
}

interface StateTypes {
  booksState: any;
  authorsState: any;
  state: BooksStateTypes[] | AuthorsStateTypes[];
}

function AdditionalInformation({ type, authorsList, booksList }: AdditionalTypes) {
  const { id }: any = useParams();
  const {
    BIRTHDATE, ABOUT, AUTHOR,
  } = ADDITIONAL_INFORMATION_CONTENT;
  let data: any[] = [];
  if (type === 'author') {
    data = authorsList;
  } else if (type === 'book') {
    data = booksList;
  }
  const currentData = data.find((elem: any) => elem.id === id);

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

const mapStateToProps = (state: StateTypes) => ({
  authorsList: state.authorsState.authors,
  booksList: state.booksState.books,
});

export default connect(mapStateToProps)(AdditionalInformation);
