import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, LayoutMainPage, Preloader, SignInForm, SignUpForm } from 'components';
import { AuthPage, BookPage, ForgotPasswordPage, MainPage, TermsPage } from 'pages';

import './app.css';

export const App = () => (
  <div className='app'>
    <Preloader />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<LayoutMainPage />}>
          <Route path='/' element={<Navigate to='/books/all' />} />
          <Route path='/books/:bookCategory' element={<MainPage />} />
          <Route path='/terms' element={<TermsPage title='Правила Пользования' />} />
          <Route path='/contract' element={<TermsPage title='Договор Оферты' />} />
        </Route>
        <Route path='/books/:bookCategory/:bookId' element={<BookPage />} />
      </Route>
      <Route element={<AuthPage />}>
        <Route path='/' element={<Navigate to='/auth' />} />
        <Route path='/auth' element={<SignInForm />} />
        <Route path='/registration' element={<SignUpForm />} />
        <Route path='/forgot-pass' element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  </div>
);
