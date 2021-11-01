import { combineReducers } from 'redux';

import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  authorsState: authorsReducer,
  booksState: booksReducer,
});

export default rootReducer;
