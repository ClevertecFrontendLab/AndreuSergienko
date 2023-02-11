import { ACTIONS } from 'constants';

const initialState = {
  display: 'groupByTile',
};

export const cardsDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setCardsDisplay:
      return { ...state, display: action.display };
    default:
      return state;
  }
};

export const setCardsDisplayAC = (display) => ({ type: ACTIONS.setCardsDisplay, display });
