import { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { ChevronIcon } from 'assets/images/main-page';
import classNames from 'classnames/bind';
import { ErrorTooltip } from 'components';
import { StrapiService } from 'services/strapi';
import { fetchCategories, setAuthStatusAC, toggleAccordionAC, toggleMenuAC } from 'store';

import styles from './sidebar.module.css';

export const Sidebar = () => {
  const setActive = ({ isActive }) => (isActive ? styles.itemActive : '');

  const dispatch = useDispatch();
  const isBurger = useSelector((state) => state.menu.isBurger);
  const isAccordion = useSelector((state) => state.accordion.isAccordion);
  const categories = useSelector((state) => state.categories.categoriesList);
  const books = useSelector((state) => state.books.booksData);
  const isCategoriesError = useSelector((state) => state.error.categoriesError);

  const { bookCategory } = useParams();
  const { bookId } = useParams();

  const navigate = useNavigate();

  const menuRef = useRef();

  const toggleMenu = () => {
    dispatch(toggleMenuAC(!isBurger));
  };

  const toggleAccordion = (value) => {
    dispatch(toggleAccordionAC(value));
  };

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('#burgerButton') && isBurger) {
        if (!menuRef.current.contains(e.target)) {
          toggleMenu();
        }
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const countBooksQuantity = (books, categories) =>
    categories
      ?.map((category) => {
        const filtered = books?.filter((book) => book.categories.find((bc) => bc === category.name));

        return filtered?.length;
      })
      .map((item, i) => (i === 0 ? null : item));

  const handleSignOut = () => {
    dispatch(toggleMenuAC(false));
    StrapiService.signOut();
    dispatch(setAuthStatusAC(''));
    navigate('/auth');
  };

  const booksQuantity = countBooksQuantity(books, categories);

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

  if (isCategoriesError) {
    return (
      <Fragment>
        <ErrorTooltip />
        <aside ref={menuRef} className={cx('aside', { active: isBurger })} data-test-id='burger-navigation'>
          <ul className={styles.list}>
            <li className={cx('item', { accordion: isAccordion })}>
              <NavLink
                to={`/books/${bookCategory || 'all'}${bookId ? `/${bookId}` : ''}`}
                className={setActive}
                onClick={() => toggleAccordion(!isAccordion)}
                data-test-id='navigation-showcase'
              >
                <span className={styles.linkWrapper}>
                  <span data-test-id='burger-showcase'>Витрина книг</span>
                  <span className={cx('chevron', { accordion: isAccordion })}>
                    <ChevronIcon />
                  </span>
                </span>
              </NavLink>
            </li>
            <li className={styles.item} data-test-id='navigation-terms'>
              <NavLink
                to='/terms'
                className={setActive}
                onClick={() => toggleAccordion(false)}
                data-test-id='burger-terms'
              >
                Правила пользования
              </NavLink>
            </li>
            <li className={styles.item} data-test-id='navigation-contract'>
              <NavLink
                to='/contract'
                className={setActive}
                onClick={() => toggleAccordion(false)}
                data-test-id='burger-contract'
              >
                Договор оферты
              </NavLink>
            </li>
          </ul>
        </aside>
      </Fragment>
    );
  }

  return (
    <aside ref={menuRef} className={cx('aside', { active: isBurger })} data-test-id='burger-navigation'>
      <ul className={styles.list}>
        <li className={cx('item', { accordion: isAccordion })}>
          <NavLink
            to={`/books/${bookCategory || 'all'}${bookId ? `/${bookId}` : ''}`}
            className={setActive}
            onClick={() => toggleAccordion(!isAccordion)}
            data-test-id='navigation-showcase'
          >
            <span className={styles.linkWrapper}>
              <span data-test-id='burger-showcase'>Витрина книг</span>
              <span className={cx('chevron', { accordion: isAccordion })}>
                <ChevronIcon />
              </span>
            </span>
          </NavLink>
          {categories?.length ? (
            <ul className={cx('sublist', { accordion: isAccordion })}>
              {categories.map(({ name, path }, index) => (
                <li key={name} className={cx('subitem', { subitemActive: bookCategory === path })}>
                  <Link
                    key={name}
                    to={`/books/${path}`}
                    data-test-id={`navigation-${path === 'all' ? 'books' : path}`}
                    className={styles.desktopLink}
                  >
                    {name}
                  </Link>
                  <span
                    className={`${styles.quantity} ${styles.desktopQuantity}`}
                    data-test-id={`navigation-book-count-for-${path === 'all' ? 'books' : path}`}
                  >
                    {booksQuantity[index]}
                  </span>
                  <Link
                    key={path}
                    to={`/books/${path}`}
                    data-test-id={`burger-${path === 'all' ? 'books' : path}`}
                    onClick={() => toggleMenu()}
                    className={styles.mobileLink}
                  >
                    {name}
                  </Link>
                  <span
                    className={`${styles.quantity} ${styles.mobileQuantity}`}
                    data-test-id={`burger-book-count-for-${path === 'all' ? 'books' : path}`}
                  >
                    {booksQuantity[index]}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
        <li className={styles.item} data-test-id='navigation-terms'>
          <NavLink to='/terms' className={setActive} onClick={() => toggleAccordion(false)} data-test-id='burger-terms'>
            Правила пользования
          </NavLink>
        </li>
        <li className={styles.item} data-test-id='navigation-contract'>
          <NavLink
            to='/contract'
            className={setActive}
            onClick={() => toggleAccordion(false)}
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
          <button type='button' onClick={handleSignOut} data-test-id='exit-button'>
            Выход
          </button>
        </li>
      </ul>
    </aside>
  );
};
