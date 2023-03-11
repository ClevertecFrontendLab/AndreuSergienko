import { StrapiService } from 'services/strapi';
import {
  setAuthResponseAC,
  setAuthStatusAC,
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
import { setForgotPasswordStatusAC, setResetPasswordStatusAC } from 'store/reducers/forgot-password-reducer';

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

export const fetchSignIn = (data) => async (dispatch) => {
  dispatch(setLoadingAC(true));
  try {
    const response = await StrapiService.signIn(data);

    dispatch(setAuthResponseAC(response?.data?.user));
    localStorage.setItem('jwt', response.data?.jwt);
    dispatch(setAuthStatusAC(response.status));
  } catch (e) {
    dispatch(setAuthStatusAC(e.response.status));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const fetchForgotPassword = (data) => async (dispatch) => {
  dispatch(setLoadingAC(true));
  try {
    const response = await StrapiService.forgotPassword(data);

    dispatch(setForgotPasswordStatusAC(response.data?.ok));
  } catch (e) {
    console.log(e);
    // dispatch(setAuthStatusAC(e.response.status));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const fetchResetPassword = (data) => async (dispatch) => {
  dispatch(setLoadingAC(true));
  try {
    const response = await StrapiService.resetPassword(data);

    console.log(response.status);
    dispatch(setResetPasswordStatusAC(response.status));
  } catch (e) {
    console.log(e);
    // dispatch(setAuthStatusAC(e.response.status));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await StrapiService.getCategories(localStorage.getItem('jwt'));

    dispatch(setCategoriesAC(response));
  } catch (e) {
    dispatch(setCategoriesErrorAC(true));
  }
};

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await StrapiService.getBooks(localStorage.getItem('jwt'));

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
    const response = await StrapiService.getBook(id, localStorage.getItem('jwt'));

    dispatch(setCurrBookAC(response));
  } catch (e) {
    dispatch(setCurrBookErrorAC(true));
  } finally {
    dispatch(setLoadingAC(false));
  }
};
