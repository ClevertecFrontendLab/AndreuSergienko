import { StrapiService } from 'services/strapi';
import {
  setBooksAC,
  setBooksErrorAC,
  setCategoriesAC,
  setCategoriesErrorAC,
  setCurrBookAC,
  setCurrBookErrorAC,
  setLoadingAC,
  setRegResponseAC,
  setRegStatusAC,
} from 'store';

export const fetchSignUp = (data) => async (dispatch) => {
  dispatch(setLoadingAC(true));
  try {
    const response = await StrapiService.signUp(data);

    dispatch(setRegResponseAC(response.data));
    localStorage.setItem('jwt', response.data?.jwt);
    dispatch(setRegStatusAC(response.statusText));
  } catch (e) {
    dispatch(setRegStatusAC(e.response?.data?.error?.name));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const fetchSignIn = (data, jwt) => async (dispatch) => {
  try {
    const response = await StrapiService.signIn(data, jwt);

    console.log(response);

    // dispatch(setCategoriesAC(response));
  } catch (e) {
    console.log(e);
    // dispatch(setCategoriesErrorAC(true));
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await StrapiService.getCategories();

    dispatch(setCategoriesAC(response));
  } catch (e) {
    dispatch(setCategoriesErrorAC(true));
  }
};

export const fetchBooks = () => async (dispatch) => {
  dispatch(setLoadingAC(true));
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
