import { defaultBg } from 'assets/images/main-page/books';

import { Rating } from 'components/rating';

import styles from './card-by-list.module.css';

export const CardByList = ({ book }) => {
  const { title, author, poster, rating, isBooked, bookedTill } = book;

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={poster ?? defaultBg} alt='book' />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.author}>{author}</p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.rating}>
            <Rating length={rating ?? 0} />
          </div>
          <button className={bookedTill || isBooked ? `${styles.order} ${styles.booked}` : styles.order} type='button'>
            {bookedTill ? `Занята до ${bookedTill}` : isBooked ? 'Забронирована' : 'Забронировать'}
          </button>
        </div>
      </div>
    </div>
  );
};
