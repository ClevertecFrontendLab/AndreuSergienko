import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Footer,Header } from 'components';

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
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
