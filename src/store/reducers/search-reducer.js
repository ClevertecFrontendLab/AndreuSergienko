import { ACTIONS } from 'constants';

const initialState = {
  isFull: false,
  term: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleSearch:
      return { ...state, isFull: action.searchView };
    case ACTIONS.setTerm:
      return { ...state, term: action.term };
    default:
      return state;
  }
};

export const toggleSearchAC = (searchView) => ({ type: ACTIONS.toggleSearch, searchView });
export const setTermAC = (term) => ({ type: ACTIONS.setTerm, term });
