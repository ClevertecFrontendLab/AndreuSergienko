import { ACTIONS } from 'constants';

const initialState = {
  isError: false,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setError:
      return { ...state, isError: action.errorView };
    default:
      return state;
  }
};

export const setErrorAC = (errorView) => ({ type: ACTIONS.setError, errorView });
