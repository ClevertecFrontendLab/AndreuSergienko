import { ACTIONS } from 'constants';

const initialState = {
  isOpen: false,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleComments:
      return { ...state, isOpen: action.isOpen };
    default:
      return state;
  }
};

export const toggleCommentsAC = (isOpen) => ({ type: ACTIONS.toggleComments, isOpen });
