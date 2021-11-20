import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;
