import { ACTIONS } from 'constants';

const initialState = {
  books: null,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setBooks:
      return { ...state, booksData: action.booksData };
    default:
      return state;
  }
};

export const setBooksAC = (booksData) => ({ type: ACTIONS.setBooks, booksData });
