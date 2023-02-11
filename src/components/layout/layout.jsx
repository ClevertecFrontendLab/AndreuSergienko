import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';
import styles from './layout.module.css';

export const Layout = () => {
  const [isBurger, setIsBurger] = useState(false);

  const toggleBurger = () => setIsBurger(!isBurger);

  const closeSidebar = () => setIsBurger(false);

  if (isBurger) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <div className={styles.layout}>
      <Header useBurger={[isBurger, toggleBurger]} />
      <Outlet context={[isBurger, closeSidebar]} />
      <Footer />
    </div>
  );
};
