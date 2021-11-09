import { INITIAL_STATE } from '../../const';
import { ActionTypes } from '../../types';

function authorsReducer(state = INITIAL_STATE, action: ActionTypes) {
  switch (action.type) {
    default: return state;
  }
}

export default authorsReducer;
