import { defaultBg } from 'assets/images/main-page/books';

import { Rating } from 'components/rating';

import styles from './card-by-tile.module.css';

export const CardByTile = ({ book }) => {
  const { title, author, poster, rating, isBooked, bookedTill } = book;

  return (
    <div className={styles.book}>
      <img className={styles.image} src={poster ?? defaultBg} alt='book' />
      <div className={styles.rating}>
        <Rating length={rating ?? 0} />
      </div>
      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.author}>{author}</p>
      </div>
      <button className={bookedTill || isBooked ? `${styles.order} ${styles.booked}` : styles.order} type='button'>
        {bookedTill ? `Занята до ${bookedTill}` : isBooked ? 'Забронирована' : 'Забронировать'}
      </button>
    </div>
  );
};
