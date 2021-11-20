import {
  ACTIONS_TYPE_USER,
  ACTION_TYPE_BOOK,
  ACTION_TYPE_AUTHOR,
} from '../../const';

export const setUser = (payload: any) => ({
  type: ACTIONS_TYPE_USER.SET_USER,
  payload,
});

export const autoLogin = () => ({
  type: ACTIONS_TYPE_USER.AUTO_LOGIN,
});

export const logUserOut = () => ({
  type: ACTIONS_TYPE_USER.LOG_OUT,
});

export const setBook = (payload: any) => ({
  type: ACTION_TYPE_BOOK.ADD_BOOK,
  payload,
});

export const getAllBook = (payload: any) => ({
  type: ACTION_TYPE_BOOK.GET_ALL_BOOK,
  payload,
});

export const setAuthor = (payload: any) => ({
  type: ACTION_TYPE_AUTHOR.ADD_AUTHOR,
  payload,
});

export const getAllAuthors = (payload: any) => ({
  type: ACTION_TYPE_AUTHOR.GET_ALL_AUTHORS,
  payload,
});
