import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Header, Footer, Preloader } from 'components';
import styles from './layout.module.css';

export const Layout = () => {
  const isBurger = useSelector((state) => state.menu.isBurger);

  if (isBurger) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <div className={styles.layout}>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
