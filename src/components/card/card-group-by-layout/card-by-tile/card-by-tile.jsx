import { defaultBg } from 'assets/images/main-page/books';
import { Rating } from 'components';
import { v4 as uuidv4 } from 'uuid';

import styles from './card-by-tile.module.css';

export const CardByTile = ({ book, term }) => {
  const { title, authors, image, rating, booking, issueYear } = book;

  const matchTitles = (title, term) => {
    if (!term.length) return title;

    const regex = new RegExp(`(${term}+)`, 'gi');
    const parts = title.split(regex);

    return parts.map((part) =>
      regex.test(part) ? (
        <mark key={uuidv4()} style={{ color: '#FF5253', background: 'none' }} data-test-id='highlight-matches'>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const matchedTitle = matchTitles(title, term);

  return (
    <div className={styles.book}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image ?? defaultBg} alt={title} />
      </div>
      <div className={styles.rating}>
        <Rating length={Math.round(rating)} />
      </div>
      <div className={styles.description}>
        <h4 className={styles.title}>{matchedTitle}</h4>
        <p className={styles.author}>
          {authors.map((author) => `${author}, `)}
          {issueYear}
        </p>
      </div>
      <button className={booking?.order ? `${styles.order} ${styles.booked}` : styles.order} type='button'>
        {booking?.order ? 'Забронирована' : 'Забронировать'}
      </button>
    </div>
  );
};
