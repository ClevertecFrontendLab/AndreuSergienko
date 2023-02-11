import { Rating } from 'components/rating';

import { user } from 'assets/images/book-page';

import styles from './review.module.css';

export const Review = ({ review }) => (
  <div className={styles.reviewer}>
    <div className={styles.user}>
      <img src={user} alt='Пользователь' className={styles.avatar} />
      <div className={styles.description}>
        <span className={styles.nickname}>{review.userName}</span>
        <span className={styles.createdDate}>{review.createdDate}</span>
      </div>
    </div>

    <div className={styles.estimation}>
      <Rating length={review.estimate} />
    </div>

    {!!review.comment && <p className={styles.comment}>{review.comment}</p>}
  </div>
);
