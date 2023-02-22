import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';

import { setCardsDisplayAC, setTermAC, toggleSearchAC, toggleSortRuleAC } from 'store';

import { fetchBooks } from 'store/async-actions';

import { CrossIcon, ListIcon, SearchIcon, WindowIcon } from 'assets/images/main-page';
import { SortIcon } from 'assets/images/main-page/icons';
import { Card, ErrorTooltip } from 'components';
import styles from './main-page.module.css';

export const MainPage = () => {
  const dispatch = useDispatch();

  const isFull = useSelector((state) => state.search.isFull);
  const display = useSelector((state) => state.cardsDisplay.display);
  const books = useSelector((state) => state.books.booksData);

  const categories = useSelector((state) => state.categories.categoriesList);
  const isBooksError = useSelector((state) => state.error.booksError);
  const term = useSelector((state) => state.search.term);
  const sortRule = useSelector((state) => state.sort.sortRule);

  const { bookCategory } = useParams();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(fetchBooks());
    }
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  const toggleIsFull = (value) => {
    dispatch(toggleSearchAC(value));
  };

  const setCardsDisplay = (display) => {
    dispatch(setCardsDisplayAC(display));
  };

  const searchStyles = {
    searchWrapper: styles.searchWrapper,
    search: styles.search,
    input: styles.input,
    full: styles.full,
  };
  const handleChange = (e) => {
    dispatch(setTermAC(e.target.value));
  };

  const cx = classNames.bind(searchStyles);

  const toggleSortRule = () => {
    if (sortRule === 'high-to-low') {
      dispatch(toggleSortRuleAC('low-to-high'));
    } else {
      dispatch(toggleSortRuleAC('high-to-low'));
    }
  };

  const filterData = (arr = [], category) => {
    if (category === 'all') return arr;

    const currCategory = categories?.find((item) => item.path === category);

    const items = arr?.filter((book) => book.categories?.find((bookCategory) => bookCategory === currCategory?.name));

    if (!items?.length) return <h2 className={styles.noBooksFound}>В этой категории еще нет книг</h2>;

    return items;
  };

  const searchFilterData = (arr = [], term) => {
    if (!term.length) return arr;
    return arr?.filter((book) => book.title.toLowerCase().includes(term.toLowerCase()));
  };

  const sortData = (arr = [], sortRule) => {
    if (!arr?.length) return [];

    if (sortRule === 'low-to-high') return arr?.sort((a, b) => a.rating - b.rating);

    return arr?.sort((a, b) => b.rating - a.rating);
  };

  const renderItems = (arr) =>
    arr?.map((book) => (
      <Link key={book.id} to={`/books/${bookCategory}/${book.id}`} className={styles.bookLink} data-test-id='card'>
        <Card key={book.id} book={book} groupBy={display} />
      </Link>
    ));

  const filteredData = filterData(searchFilterData(books, term), bookCategory);

  const visibleItems = renderItems(sortData(filteredData, sortRule));

  if (isBooksError) {
    return <ErrorTooltip />;
  }
  if (!books?.length) {
    return null;
  }

  return (
    <section className={styles.content}>
      <div className={styles.viewPanel}>
        <div className={styles.sort}>
          <div className={cx('searchWrapper', { full: isFull })} data-test-id='button-search-open'>
            <button
              type='button'
              className={styles.searchIcon}
              onClick={() => {
                toggleIsFull(true);
              }}
            >
              <SearchIcon />
            </button>
            <input
              className={cx('search')}
              onChange={handleChange}
              value={term}
              type='search'
              placeholder='Поиск книги или автора…'
              data-test-id='input-search'
            />
            <button
              type='button'
              className={styles.searchCross}
              data-test-id='button-search-close'
              onClick={() => {
                toggleIsFull(false);
              }}
            >
              <CrossIcon />
            </button>
          </div>
          <button className={`${styles.filter} ${styles.input}`} type='button' onClick={toggleSortRule}>
            <SortIcon />
            <span>По рейтингу</span>
          </button>
        </div>

        <div className={styles.displayButtons}>
          <button
            onClick={() => setCardsDisplay('groupByTile')}
            type='button'
            className={
              display === 'groupByTile' ? `${styles.activeDisplayBtn} ${styles.displayBtn}` : styles.displayBtn
            }
            data-test-id='button-menu-view-window'
          >
            <WindowIcon />
          </button>
          <button
            onClick={() => setCardsDisplay('groupByList')}
            type='button'
            className={
              display === 'groupByList' ? `${styles.activeDisplayBtn} ${styles.displayBtn}` : styles.displayBtn
            }
            data-test-id='button-menu-view-list'
          >
            <ListIcon />
          </button>
        </div>
      </div>

      <div className={`${styles.books} ${styles[display]}`}>{visibleItems}</div>
    </section>
  );
};
