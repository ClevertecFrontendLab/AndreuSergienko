/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logo, user } from 'assets/images/header';
import classNames from 'classnames/bind';
import { StrapiService } from 'services/strapi';
import { setAuthStatusAC, toggleMenuAC } from 'store';

import styles from './header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const isBurger = useSelector((state) => state.menu.isBurger);

  const [isControls, setIsControls] = useState(false);

  const toggleMenu = () => {
    dispatch(toggleMenuAC(!isBurger));
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    StrapiService.signOut();
    dispatch(setAuthStatusAC(''));
    navigate('/auth');
  };

  const headerStyles = {
    header: styles.header,
    controlsActive: styles.controlsActive,
  };

  const cx = classNames.bind(headerStyles);

  return (
    <header className={cx('header', { controlsActive: isControls })}>
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
          <div role='button' className={styles.profile} onClick={() => setIsControls(!isControls)}>
            <span className={styles.greet}>Привет, Иван!</span>
            <img src={user} alt='user-avatar' />
            {isControls && (
              <div className={styles.controls}>
                <button type='button' className={styles.controlsBtn}>
                  Профиль
                </button>
                <button type='button' className={styles.controlsBtn} onClick={handleSignOut}>
                  Выход
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
