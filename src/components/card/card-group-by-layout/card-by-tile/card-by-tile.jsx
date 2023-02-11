import { defaultBg } from 'assets/images/main-page/books';

import { Rating } from 'components/rating';

import styles from './card-by-tile.module.css';

export const CardByTile = ({ book }) => {
  const { title, authors, image = defaultBg, rating, isBooked, bookedTill = false, issueYear } = book;

  return (
    <div className={styles.book}>
      <img className={styles.image} src={image} alt='book' />
      <div className={styles.rating}>
        <Rating length={rating ?? 0} />
      </div>
      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.author}>{authors.map((author) => author).join(authors.length < 2 ? '' : ',')}</p>
      </div>
      <button className={bookedTill || isBooked ? `${styles.order} ${styles.booked}` : styles.order} type='button'>
        {bookedTill ? `Занята до ${bookedTill}` : isBooked ? 'Забронирована' : 'Забронировать'}
      </button>
    </div>
  );
};
