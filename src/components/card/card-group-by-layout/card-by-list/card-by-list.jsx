import { v4 as uuidv4 } from 'uuid';

import { defaultBg } from 'assets/images/main-page/books';

import { Rating } from 'components/rating';

import styles from './card-by-list.module.css';

export const CardByList = ({ book, term }) => {
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
      <div className={styles.image}>
        <img src={image ?? defaultBg} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <h4 className={styles.title}>{matchedTitle}</h4>
          <p className={styles.author}>
            {authors.map((author) => `${author}, `)}
            {issueYear}
          </p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.rating}>
            <Rating length={Math.round(rating)} />
          </div>
          <button className={booking?.order ? `${styles.order} ${styles.booked}` : styles.order} type='button'>
            {booking?.order ? 'Забронирована' : 'Забронировать'}
          </button>
        </div>
      </div>
    </div>
  );
};
