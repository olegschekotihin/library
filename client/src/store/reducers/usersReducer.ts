import { ACTIONS_TYPE_USER } from '../../const';
import { ActionTypes } from '../../types';

const defaultState = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = defaultState, action): ActionTypes => {
  switch (action.type) {
    case ACTIONS_TYPE_USER.SET_USER:
      return {
        ...state,
        user: { ...action.payload },
        loggedIn: true,
      };
    case ACTIONS_TYPE_USER.LOG_OUT:
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    case ACTIONS_TYPE_USER.AUTO_LOGIN:
      return {
        loggedIn: true,
        localToken: localStorage.token,
      };
    default: return state;
  }
};

export default userReducer;
