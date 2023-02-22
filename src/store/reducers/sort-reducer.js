import { ACTIONS } from 'constants';

const initialState = {
  sortRule: 'high-to-low',
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleSortRule:
      return { ...state, sortRule: action.sortRule };
    default:
      return state;
  }
};

export const toggleSortRuleAC = (sortRule) => ({ type: ACTIONS.toggleSortRule, sortRule });
