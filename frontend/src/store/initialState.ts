const INITIAL_STATE = {
  authors: [
    {
      id: 123,
      firstName: 'Arkady',
      lastName: 'Strugatski',
      birthDate: '1946/11/10',
      countryOfBirth: 'USSR',
      description: 'Arkady Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 321,
      firstName: 'Boris',
      lastName: 'Strugatski',
      birthDate: '1948/11/10',
      countryOfBirth: 'USSR',
      description: 'Boris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ],
  books: [
    {
      id: 456,
      title: 'Book1',
      description: 'Cool story',
      code: '1337',
      author: 'Strugatski',
      pagesCount: '2517',
      publicationDate: '1993/06/04',
      author_id: 123,
    },
    {
      id: 654,
      title: 'Book2',
      description: 'Cool story 2',
      code: '1613',
      author: 'Strugatski',
      pagesCount: '322',
      publicationDate: '1993/06/04',
      author_id: 321,
    },
  ],
};

export default INITIAL_STATE;
