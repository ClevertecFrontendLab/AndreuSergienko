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

export const SIGN_UP_FORM = {
  fields: [
    {
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Придумайте логин для входа',
          tip: 'Используйте для логина латинский алфавит и цифры',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Пароль',
          tip: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        },
      ],
      button: {
        content: 'следующий шаг',
      },
    },
    {
      inputs: [
        {
          name: 'firstName',
          type: 'text',
          placeholder: 'Имя',
          errorTip: 'Поле не должно быть пустым',
        },
        {
          name: 'lastName',
          type: 'text',
          placeholder: 'Фамилия',
          errorTip: 'Поле не должно быть пустым',
        },
      ],
      button: {
        content: 'последний шаг',
      },
    },
    {
      inputs: [
        {
          name: 'tel',
          type: 'tel',
          placeholder: 'Номер телефона',
          tip: 'В формате +375 (xx) xxx-xx-xx',
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'E-mail',
          errorTip: 'Введите корректный email',
        },
      ],
      button: {
        content: 'зарегистрироваться',
        type: 'submit',
      },
    },
  ],
  link: {
    content: 'войти',
    path: '/signIn',
  },
};

export const SIGN_IN_FORM = {
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
  link: {
    content: 'регистрация',
    path: '/signUp',
  },
};
