import { ACTIONS } from 'constants';

const initialState = {
  isLoading: false,
};

export const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setLoading:
      return { ...state, isLoading: action.preloaderView };
    default:
      return state;
  }
};

export const setLoadingAC = (preloaderView) => ({ type: ACTIONS.setLoading, preloaderView });
