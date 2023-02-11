import { ACTIONS } from 'constants';

const initialState = {
  isAccordion: false,
};

export const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleAccordion:
      return { ...state, isAccordion: action.accordionView };
    default:
      return state;
  }
};

export const toggleAccordionAC = (accordionView) => ({ type: ACTIONS.toggleAccordion, accordionView });
