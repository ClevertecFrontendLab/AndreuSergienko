import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  menuReducer,
  accordionReducer,
  searchReducer,
  cardsDisplayReducer,
  commentsReducer,
  booksReducer,
  categoriesReducer,
  currBookReducer,
  preloaderReducer,
  errorReducer,
} from './reducers';

const reducers = combineReducers({
  menu: menuReducer,
  accordion: accordionReducer,
  search: searchReducer,
  cardsDisplay: cardsDisplayReducer,
  comments: commentsReducer,
  books: booksReducer,
  categories: categoriesReducer,
  currentBook: currBookReducer,
  preloader: preloaderReducer,
  error: errorReducer,
});

export const store = createStore(reducers, composeWithDevTools());
