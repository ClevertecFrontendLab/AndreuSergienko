import { ACTIONS } from 'constants';

const initialState = {
  categories: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.getCategories:
      return { ...state, categoriesList: action.categoriesList };
    default:
      return state;
  }
};

export const getCategoriesAC = (categoriesList) => ({ type: ACTIONS.getCategories, categoriesList });
