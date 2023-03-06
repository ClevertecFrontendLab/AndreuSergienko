import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth-reducer';
import {
  accordionReducer,
  booksReducer,
  cardsDisplayReducer,
  categoriesReducer,
  commentsReducer,
  currBookReducer,
  errorReducer,
  formReducer,
  menuReducer,
  preloaderReducer,
  registrationReducer,
  searchReducer,
  sortReducer,
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
  sort: sortReducer,
  form: formReducer,
  registration: registrationReducer,
  auth: authReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
