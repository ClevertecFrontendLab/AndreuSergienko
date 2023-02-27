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
};

export const FORM_FIELDS = {
  signUp: {
    fields: [
      {
        inputs: [
          {
            type: 'text',
            placeholder: 'Придумайте логин для входа',
            tip: 'Используйте для логина латинский алфавит и цифры',
          },
          {
            type: 'password',
            placeholder: 'Пароль',
            tip: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
          },
        ],
        buttonContent: 'следующий шаг',
      },
      {
        inputs: [
          {
            type: 'text',
            placeholder: 'Имя',
          },
          {
            type: 'text',
            placeholder: 'Фамилия',
          },
        ],
        buttonContent: 'последний шаг',
      },
      {
        inputs: [
          {
            type: 'tel',
            placeholder: 'Номер телефона',
          },
          {
            type: 'text',
            placeholder: 'E-mail',
          },
        ],
        buttonContent: 'зарегистрироваться',
      },
    ],
    link: {
      content: 'войти',
      path: '/signIn',
    },
    title: 'Регистрация',
  },
  signIn: {
    fields: [
      {
        inputs: [
          {
            type: 'text',
            placeholder: 'Логин',
          },
          {
            type: 'password',
            placeholder: 'Пароль',
          },
        ],
        buttonContent: 'вход',
      },
    ],
    link: {
      content: 'регистрация',
      path: '/signUp',
    },
    title: 'Вход в личный кабинет',
  },
};
