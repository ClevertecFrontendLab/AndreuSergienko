import { Navigate, Route, Routes } from 'react-router-dom';

import './app.css';

import { MainPage, BookPage, TermsPage } from 'pages';

import { Layout, LayoutMainPage } from 'components';

export const App = () => (
  <div className='app'>
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
    </Routes>
  </div>
);
