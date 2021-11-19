import { ACTION_TYPE_AUTHOR } from '../../const';
import { ActionTypes } from '../../types';

const authorDefaultState = {
  authors: [],
};

function authorsReducer(state = authorDefaultState, action: ActionTypes) {
  const { ADD_AUTHOR, GET_ALL_AUTHORS } = ACTION_TYPE_AUTHOR;
  switch (action.type) {
    case ADD_AUTHOR:
      return {
        ...state,
        authors: { ...action.payload },
      };
    case GET_ALL_AUTHORS:
      return {
        ...state,
        authors: [...action.payload],
      };
    default: return state;
  }
}

export default authorsReducer;
