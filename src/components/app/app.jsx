import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, LayoutMainPage, SignInForm, SignUpForm } from 'components';
import { AuthPage, BookPage, MainPage, TermsPage } from 'pages';

import './app.css';

export const App = () => (
  <div className='app'>
    <Routes>
      <Route element={<AuthPage />}>
        <Route path='/' element={<Navigate to='/signIn' />} />
        <Route path='/signIn' element={<SignInForm />} />
        <Route path='/signUp' element={<SignUpForm />} />
      </Route>
      <Route path='/' element={<Layout />}>
        <Route element={<LayoutMainPage />}>
          <Route path='/' element={<Navigate to='/books/all' />} />
          <Route path='/books/:bookCategory' element={<MainPage />} />
          <Route path='/terms' element={<TermsPage title='Правила Пользования' />} />
          <Route path='/contract' element={<TermsPage title='Договор Оферты' />} />
        </Route>
        <Route path='/books/:bookCategory/:bookId' element={<BookPage />} />
      </Route>
    </Routes>
  </div>
);
