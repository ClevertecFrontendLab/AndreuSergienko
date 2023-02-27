import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMenuAC } from 'store';

import { logo, user } from 'assets/images/header';
import styles from './header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const isBurger = useSelector((state) => state.menu.isBurger);

  const toggleMenu = () => {
    dispatch(toggleMenuAC(!isBurger));
  };

  return (
    <header className={styles.header}>
      <div className='app-container'>
        <div className={styles.container}>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt='logo' />
          </Link>
          <button
            id='burgerButton'
            type='button'
            className={isBurger ? `${styles.burger} ${styles.burgerOpen}` : styles.burger}
            onClick={toggleMenu}
            data-test-id='button-burger'
          >
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </button>
          <h1 className={styles.title}>Библиотека</h1>
          <div className={styles.profile}>
            <span className={styles.greet}>Привет, Иван!</span>
            <img src={user} alt='user-avatar' />
            <Link to='/signUp'>Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
