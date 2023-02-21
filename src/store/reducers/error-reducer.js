import { ACTIONS } from 'constants';

const initialState = {
  categoriesError: false,
  booksError: false,
  currBookError: false,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setCategoriesError:
      return { ...state, categoriesError: action.isError };
    case ACTIONS.setBooksError:
      return { ...state, booksError: action.isError };
    case ACTIONS.setCurrBookError:
      return { ...state, currBookError: action.isError };
    default:
      return state;
  }
};

export const setCategoriesErrorAC = (isError) => ({ type: ACTIONS.setCategoriesError, isError });
export const setBooksErrorAC = (isError) => ({ type: ACTIONS.setBooksError, isError });
export const setCurrBookErrorAC = (isError) => ({ type: ACTIONS.setCurrBookError, isError });
