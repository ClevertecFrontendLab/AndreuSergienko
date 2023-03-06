import { ACTIONS } from 'constants';

const initialState = {
  status: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setAuthStatus:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setAuthStatusAC = (status) => ({ type: ACTIONS.setAuthStatus, status });
