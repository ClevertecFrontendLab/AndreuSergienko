import { defaultBg } from 'assets/images/main-page/books';

import { Rating } from 'components/rating';

import styles from './card-by-list.module.css';

export const CardByList = ({ book }) => {
  const { title, authors, image = defaultBg, rating, isBooked, bookedTill = false, issueYear } = book;

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={image ?? defaultBg} alt='book' />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.author}>{authors.map((author) => author).join(authors.length < 2 ? '' : ',')}</p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.rating}>
            <Rating length={rating} />
          </div>
          <button className={bookedTill || isBooked ? `${styles.order} ${styles.booked}` : styles.order} type='button'>
            {bookedTill ? `Занята до ${bookedTill}` : isBooked ? 'Забронирована' : 'Забронировать'}
          </button>
        </div>
      </div>
    </div>
  );
};
