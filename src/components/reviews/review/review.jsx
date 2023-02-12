import { Rating } from 'components/rating';

import { userDefault } from 'assets/images/book-page';

import styles from './review.module.css';

export const Review = ({ review: { user, id, rating, text, createdAt } }) => (
  <div className={styles.reviewer}>
    <div className={styles.user}>
      <img src={user?.avatarUrl ?? userDefault} alt='Пользователь' className={styles.avatar} />
      <div className={styles.description}>
        <span className={styles.nickname}>
          {user.firstName} {user.lastName}
        </span>
        <span className={styles.createdDate}>{createdAt}</span>
      </div>
    </div>

    <div className={styles.estimation}>
      <Rating length={Math.round(rating)} />
    </div>

    {!!text && <p className={styles.comment}>{text}</p>}
  </div>
);
