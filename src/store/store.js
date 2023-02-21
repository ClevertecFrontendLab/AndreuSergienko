import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
  accordionReducer, booksReducer, cardsDisplayReducer, categoriesReducer, commentsReducer, currBookReducer, errorReducer, menuReducer, preloaderReducer, searchReducer
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

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
