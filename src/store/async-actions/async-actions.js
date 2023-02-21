import { StrapiService } from 'services/strapi';

import {
  setBooksAC,
  setBooksErrorAC,
  setCategoriesAC,
  setCategoriesErrorAC,
  setCurrBookAC,
  setCurrBookErrorAC,
  setLoadingAC
} from 'store';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await StrapiService.getCategories();
    dispatch(setCategoriesAC(response));
  } catch (e) {
    dispatch(setCategoriesErrorAC(true));
  }
};

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await StrapiService.getBooks();
    dispatch(setBooksAC(response));
  } catch (e) {
    dispatch(setBooksErrorAC(true));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const fetchBook = (id) => async (dispatch) => {
  dispatch(setLoadingAC(true));
  try {
    const response = await StrapiService.getBook(id);
    dispatch(setCurrBookAC(response));
  } catch (e) {
    dispatch(setCurrBookErrorAC(true));
  } finally {
    dispatch(setLoadingAC(false));
  }
};
