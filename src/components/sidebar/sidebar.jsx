import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useOutletContext, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { ChevronIcon } from 'assets/images/main-page';
import { categories } from 'constants';
import styles from './sidebar.module.css';

export const Sidebar = () => {
  const setActive = ({ isActive }) => (isActive ? styles.itemActive : '');
  const [isAccordion, setIsAccordion] = useState(true);

  const [isBurger, closeSidebar] = useOutletContext();

  const { bookCategory } = useParams();
  const { bookId } = useParams();

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('#burgerButton') && isBurger) {
        if (!menuRef.current.contains(e.target)) {
          closeSidebar();
        }
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const sidebarStyles = {
    aside: styles.aside,
    list: styles.list,
    userControls: styles.userControls,
    active: styles.active,
    item: styles.item,
    sublist: styles.sublist,
    subitem: styles.subitem,
    subitemActive: styles.subitemActive,
    accordion: styles.accordion,
    chevron: styles.chevron,
  };

  const cx = classNames.bind(sidebarStyles);

  return (
    <aside ref={menuRef} className={cx('aside', { active: isBurger })} data-test-id='burger-navigation'>
      <ul className={styles.list}>
        <li className={cx('item', { accordion: isAccordion })}>
          <NavLink
            to={`/books/${bookCategory || 'all'}${bookId ? `/${bookId}` : ''}`}
            className={setActive}
            onClick={() => setIsAccordion(!isAccordion)}
            data-test-id='navigation-showcase'
          >
            <span className={styles.linkWrapper}>
              <span data-test-id='burger-showcase'>Витрина книг</span>
              <span className={cx('chevron', { accordion: isAccordion })}>
                <ChevronIcon />
              </span>
            </span>
          </NavLink>
          <ul className={cx('sublist', { accordion: isAccordion })}>
            {categories.map(({ name, path }) => (
              <li
                key={name}
                className={cx('subitem', { subitemActive: bookCategory === path })}
                data-path={path}
                data-test-id='navigation-books'
              >
                <Link key={name} to={`/books/${path}`} data-test-id='burger-books' onClick={() => closeSidebar()}>
                  {name}
                  <span className={styles.quantity}>14</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.item} data-test-id='navigation-terms'>
          <NavLink to='/terms' className={setActive} onClick={() => setIsAccordion(false)} data-test-id='burger-terms'>
            Правила пользования
          </NavLink>
        </li>
        <li className={styles.item} data-test-id='navigation-contract'>
          <NavLink
            to='/contract'
            className={setActive}
            onClick={() => setIsAccordion(false)}
            data-test-id='burger-contract'
          >
            Договор оферты
          </NavLink>
        </li>
      </ul>
      <ul className={cx('list', 'userControls')}>
        <li className={styles.item}>
          <NavLink to='/profile' className={setActive}>
            Профиль
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/exit' className={setActive}>
            Выход
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
