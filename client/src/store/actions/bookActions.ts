import axios from 'axios';
import { URL } from '../../const';
import { getAllBook, setBook } from '../actionCreator/actionCreator';

export const createBook = (bookInfo: any) => (dispatch: any) => {
  axios.post(URL.BOOKS.CREATE, bookInfo)
    .then((res) => {
      dispatch(setBook(res.data.book));
    }).catch((e) => {
      throw new Error(e);
    });
};

export const getBooks = () => (dispatch: any) => {
  axios.get(URL.BOOKS.CREATE)
    .then((res) => {
      dispatch(getAllBook(res.data));
    })
    .catch((e) => {
      throw new Error(e);
    });
};
