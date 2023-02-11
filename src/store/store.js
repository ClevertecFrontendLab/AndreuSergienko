import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { menuReducer, accordionReducer, searchReducer, cardsDisplayReducer, commentsReducer } from './reducers';

const reducers = combineReducers({
  menu: menuReducer,
  accordion: accordionReducer,
  search: searchReducer,
  cardsDisplay: cardsDisplayReducer,
  comments: commentsReducer,
});

export const store = createStore(reducers, composeWithDevTools());
