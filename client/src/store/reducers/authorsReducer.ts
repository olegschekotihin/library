import { INITIAL_STATE } from '../../const';

type ActionTypes= {
  action: string,
  type: string,
}

function authorsReducer(state = INITIAL_STATE, action: ActionTypes) {
  switch (action.type) {
    default: return state;
  }
}

export default authorsReducer;
