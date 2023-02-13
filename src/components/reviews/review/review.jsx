import { Rating } from 'components/rating';

import { userDefault } from 'assets/images/book-page';

import styles from './review.module.css';

export const Review = ({ review: { user, id, rating, text, createdAt } }) => {
  const formatDate = (date) => {
    const years = [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь',
    ];

    const localeDate = new Date(date).toLocaleDateString().split('/');

    const day = localeDate[1];
    const month = years[localeDate[0] - 1];
    const year = localeDate[2];

    return `${day} ${month} ${year}`;
  };

  const createdAtFormatted = formatDate(createdAt);

  return (
    <div className={styles.reviewer}>
      <div className={styles.user}>
        <img src={user?.avatarUrl ?? userDefault} alt='Пользователь' className={styles.avatar} />
        <div className={styles.description}>
          <span className={styles.nickname}>
            {user.firstName} {user.lastName}
          </span>
          <span className={styles.createdDate}>{createdAtFormatted}</span>
        </div>
      </div>

      <div className={styles.estimation}>
        <Rating length={Math.round(rating)} />
      </div>

      {!!text && <p className={styles.comment}>{text}</p>}
    </div>
  );
};
