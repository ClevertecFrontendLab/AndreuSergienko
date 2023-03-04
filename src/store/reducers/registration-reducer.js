import { ACTIONS } from 'constants';

const initialState = {
  response: null,
  status: '',
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setRegResponse:
      return { ...state, response: action.response };
    case ACTIONS.setRegStatus:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setRegResponseAC = (response) => ({ type: ACTIONS.setRegResponse, response });
export const setRegStatusAC = (status) => ({ type: ACTIONS.setRegStatus, status });
