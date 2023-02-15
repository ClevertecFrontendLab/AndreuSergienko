import { ACTIONS } from 'constants';

const initialState = {
  isBurger: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleBurger:
      return { ...state, isBurger: action.burgerView };
    default:
      return state;
  }
};

export const toggleMenuAC = (burgerView) => ({ type: ACTIONS.toggleBurger, burgerView });
