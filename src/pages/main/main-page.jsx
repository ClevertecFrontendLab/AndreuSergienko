import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';

import { Card } from 'components';
import { WindowIcon, ListIcon, CrossIcon, SearchIcon } from 'assets/images/main-page';
import { BOOKS as books } from 'mocks';
import styles from './main-page.module.css';

export const MainPage = () => {
  const [display, setDisplay] = useState('groupByTile');
  const [isFull, setIsFull] = useState(false);

  const searchStyles = {
    searchWrapper: styles.searchWrapper,
    search: styles.search,
    input: styles.input,
    full: styles.full,
  };

  const cx = classNames.bind(searchStyles);

  const { bookCategory } = useParams();

  const filterData = (arr, category) => {
    if (category === 'all')
      return arr.map((book) => (
        <Link key={book.id} to={`/books/${book.category}/${book.id}`} className={styles.bookLink} data-test-id='card'>
          <Card key={book.id} book={book} groupBy={display} />
        </Link>
      ));

    const items = arr.filter((book) => book.category === category);

    if (!items.length) return <h2>Книг по данной категории не найдено :(</h2>;

    return items.map((book) => (
      <Link key={book.id} to={`/books/${book.category}/${book.id}`} className={styles.bookLink} data-test-id='card'>
        <Card key={book.id} book={book} groupBy={display} />
      </Link>
    ));
  };

  const visibleItems = filterData(books, bookCategory);

  return (
    <section className={styles.content}>
      <div className={styles.viewPanel}>
        <div className={styles.sort}>
          <div className={cx('searchWrapper', { full: isFull })} data-test-id='button-search-open'>
            <button
              type='button'
              className={styles.searchIcon}
              onClick={() => {
                setIsFull(true);
              }}
            >
              <SearchIcon />
            </button>
            <input
              className={cx('search')}
              type='search'
              placeholder='Поиск книги или автора…'
              data-test-id='input-search'
            />
            <button
              type='button'
              className={styles.searchCross}
              data-test-id='button-search-close'
              onClick={() => {
                setIsFull(false);
              }}
            >
              <CrossIcon />
            </button>
          </div>
          <button className={`${styles.filter} ${styles.input}`} type='button'>
            <span>По рейтингу</span>
          </button>
        </div>

        <div className={styles.displayButtons}>
          <button
            onClick={() => setDisplay('groupByTile')}
            type='button'
            className={
              display === 'groupByTile' ? `${styles.activeDisplayBtn} ${styles.displayBtn}` : styles.displayBtn
            }
            data-test-id='button-menu-view-window'
          >
            <WindowIcon />
          </button>
          <button
            onClick={() => setDisplay('groupByList')}
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
