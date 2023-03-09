import { ACTIONS } from 'constants';

const initialState = {
  response: null,
  status: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setAuthResponse:
      return { ...state, response: action.response };
    case ACTIONS.setAuthStatus:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setAuthStatusAC = (status) => ({ type: ACTIONS.setAuthStatus, status });
export const setAuthResponseAC = (response) => ({ type: ACTIONS.setAuthResponse, response });
