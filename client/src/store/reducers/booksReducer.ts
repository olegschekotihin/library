import { ACTION_TYPE_BOOK } from '../../const';
import { ActionTypes } from '../../types';

const bookDefaultState = {
  books: [],
};

function booksReducer(state = bookDefaultState, action: ActionTypes) {
  const { ADD_BOOK, GET_ALL_BOOK } = ACTION_TYPE_BOOK;
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: { ...action.payload },
      };
    case GET_ALL_BOOK:
      return {
        ...state,
        books: [...action.payload],
      };
    default: return state;
  }
}

export default booksReducer;
