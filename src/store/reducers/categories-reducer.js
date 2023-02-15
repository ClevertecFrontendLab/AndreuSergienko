import { ACTIONS } from 'constants';

const initialState = {
  categoriesList: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setCategories:
      return { ...state, categoriesList: action.categoriesList };
    default:
      return state;
  }
};

export const setCategoriesAC = (categoriesList) => ({ type: ACTIONS.setCategories, categoriesList });
