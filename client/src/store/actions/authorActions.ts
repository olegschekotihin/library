import axios from 'axios';
import { URL } from '../../const';
import { setAuthor, getAllAuthors } from '../actionCreator/actionCreator';

export const createAuthor = (authorInfo: any) => (dispatch: any) => {
  axios.post(URL.AUTHORS.CREATE, authorInfo)
    .then((res) => {
      dispatch(setAuthor(res.data.author));
    }).catch((e) => {
      throw new Error(e);
    });
};

export const getAuthors = () => (dispatch: any) => {
  axios.get(URL.AUTHORS.CREATE)
    .then((res) => {
      dispatch(getAllAuthors(res.data));
    })
    .catch((e) => {
      throw new Error(e);
    });
};
