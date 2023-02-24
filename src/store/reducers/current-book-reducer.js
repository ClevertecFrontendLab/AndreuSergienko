import { ACTIONS } from 'constants';

const initialState = {
  book: null,
};

export const currBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setBook:
      return { ...state, book: action.book };
    default:
      return state;
  }
};

export const setCurrBookAC = (book) => ({ type: ACTIONS.setBook, book });
