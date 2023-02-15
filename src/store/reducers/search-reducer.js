import { ACTIONS } from 'constants';

const initialState = {
  isFull: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleSearch:
      return { ...state, isFull: action.searchView };
    default:
      return state;
  }
};

export const toggleSearchAC = (searchView) => ({ type: ACTIONS.toggleSearch, searchView });
