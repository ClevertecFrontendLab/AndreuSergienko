export const ACTIONS = {
  toggleBurger: 'TOGGLE_BURGER',
  toggleAccordion: 'TOGGLE_ACCORDION',
  toggleSearch: 'TOGGLE_SEARCH',
  setTerm: 'SET_TERM',
  toggleComments: 'TOGGLE_COMMENTS',
  toggleSortRule: 'TOGGLE_SORT_RULE',
  setCardsDisplay: 'SET_CARDS_DISPLAY',
  setBooks: 'SET_BOOKS',
  setCategories: 'SET_CATEGORIES',
  setBook: 'SET_BOOK',
  setLoading: 'SET_LOADING',
  setCategoriesError: 'SET_CATEGORIES_ERROR',
  setBooksError: 'SET_BOOKS_ERROR',
  setCurrBookError: 'SET_CURR_BOOK_ERROR',
  setFormData: 'SET_FORM_DATA',
  setRegResponse: 'SET_REG_RESPONSE',
  setRegStatus: 'SET_REG_STATUS',
};

export const SUCCESS_FB = {
  title: 'Регистрация успешна',
  errorText: 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль',
  link: {
    content: 'вход',
    path: '/auth',
  },
};

export const NON_UNIQUE_FB = {
  title: 'Данные не сохранились',
  errorText:
    'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.',
  link: {
    content: 'назад к регистрации',
    path: '/registration',
  },
};

export const FAILED_FB = {
  title: 'Данные не сохранились',
  errorText: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
  link: {
    content: 'повторить',
    path: '/signUp',
  },
};

export const ERRORS = {
  uniques: 'ApplicationError',
  nonValidate: 'ValidateError',
};
