import { ACTIONS } from 'constants';

const initialState = {
  regData: null,
  authData: null,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setRegFormData:
      return { ...state, regData: { ...state.regData, ...action.data } };
    case ACTIONS.setAuthFormData:
      return { ...state, authData: { ...action.data } };
    default:
      return state;
  }
};

export const setRegFormDataAC = (data) => ({ type: ACTIONS.setRegFormData, data });
export const setAuthFormDataAC = (data) => ({ type: ACTIONS.setAuthFormData, data });
