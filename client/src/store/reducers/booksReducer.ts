import { INITIAL_STATE } from '../../const';
import { ActionTypes } from '../../types';

function booksReducer(state = INITIAL_STATE, action: ActionTypes) {
  switch (action.type) {
    default: return state;
  }
}

export default booksReducer;
