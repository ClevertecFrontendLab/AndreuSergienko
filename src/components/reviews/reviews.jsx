import { ChevronIconDark } from 'assets/images/book-page';
import { useState } from 'react';

import classNames from 'classnames/bind';

import { Review } from './review';

import styles from './reviews.module.css';

export const Reviews = ({ reviews }) => {
  const [isComments, setIsComments] = useState(true);

  const reviewStyles = {
    head: styles.head,
    hasReviews: styles.hasReviews,
    open: styles.open,
    chevron: styles.chevronIcon,
    reviewers: styles.reviewers,
  };

  const cx = classNames.bind(reviewStyles);

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') setIsComments(!isComments);
  };

  return (
    <div className={styles.reviews}>
      <div
        role='button'
        onKeyDown={handleKeyDown}
        onClick={() => setIsComments(!isComments)}
        data-test-id='button-hide-reviews'
        tabIndex={0}
        className={cx('head', { hasReviews: reviews.length }, { open: isComments })}
      >
        <div className={styles.subtitle}>Отзывы</div>
        <div className={styles.count}>{reviews.length}</div>
        <button type='button' className={cx('chevron', { hasReviews: reviews.length }, { open: isComments })}>
          <ChevronIconDark />
        </button>
      </div>

      {!!reviews.length && (
        <div className={cx('reviewers', { open: isComments })}>
          {reviews.map((review) => (
            <Review key={review.userName} review={review} />
          ))}
        </div>
      )}

      <button data-test-id='button-rating' type='button' className={styles.rateBtn}>
        оценить книгу
      </button>
    </div>
  );
};
