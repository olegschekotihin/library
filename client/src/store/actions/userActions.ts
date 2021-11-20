import axios from 'axios';
import { URL } from '../../const';
import { logUserOut, setUser } from '../actionCreator/actionCreator';

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` },
};

export const fetchUser = (userInfo: any) => (dispatch: any) => {
  axios.post(URL.USERS.AUTH, userInfo)
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      dispatch(setUser(res.data.user));
    }).catch((e) => {
      throw new Error(e);
    });
};

export const signUserUp = (userInfo: any) => (dispatch: any) => {
  axios.post(URL.USERS.USER, userInfo)
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      dispatch(setUser(res.data.user));
    }).catch((e) => {
      throw new Error(e);
    });
};

export const autoLogin = () => (dispatch: any) => {
  axios.get(URL.USERS.AUTO_LOGIN, config)
    .then((res) => {
      const currentJWTToken = localStorage.getItem('token');
      dispatch(setUser(res.data));
      if (currentJWTToken !== null) {
        localStorage.setItem('token', currentJWTToken);
      }
    }).catch((e) => {
      throw new Error(e);
    });
};

export const logOut = () => (dispatch: any) => {
  dispatch(logUserOut());
};
