import { ACTIONS } from 'constants';

const initialState = {
  forgotPasswordStatus: '',
  resetPasswordStatus: '',
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setForgotPasswordStatus:
      return { ...state, forgotPasswordStatus: action.forgotPasswordStatus };
    case ACTIONS.setResetPasswordStatus:
      return { ...state, resetPasswordStatus: action.resetPasswordStatus };
    default:
      return state;
  }
};

export const setForgotPasswordStatusAC = (forgotPasswordStatus) => ({
  type: ACTIONS.setForgotPasswordStatus,
  forgotPasswordStatus,
});
export const setResetPasswordStatusAC = (resetPasswordStatus) => ({
  type: ACTIONS.setResetPasswordStatus,
  resetPasswordStatus,
});
