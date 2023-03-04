import { ACTIONS } from 'constants';

const initialState = {
  data: null,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setFormData:
      return { ...state, data: { ...state.data, ...action.data } };
    default:
      return state;
  }
};

export const setFormDataAC = (data) => ({ type: ACTIONS.setFormData, data });
