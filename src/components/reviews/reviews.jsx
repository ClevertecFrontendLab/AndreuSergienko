import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronIconDark } from 'assets/images/book-page';

import classNames from 'classnames/bind';

import { toggleCommentsAC } from 'store';

import { Review } from './review';

import styles from './reviews.module.css';

export const Reviews = ({ reviews }) => {
  // const [isComments, setIsComments] = useState(true);

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.comments.isOpen);

  const reviewStyles = {
    head: styles.head,
    hasReviews: styles.hasReviews,
    open: styles.open,
    chevron: styles.chevronIcon,
    reviewers: styles.reviewers,
  };

  const cx = classNames.bind(reviewStyles);

  const toggleComments = () => {
    dispatch(toggleCommentsAC(!isOpen));
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') toggleComments();
  };

  return (
    <div className={styles.reviews}>
      <div
        role='button'
        onKeyDown={handleKeyDown}
        onClick={() => toggleComments()}
        data-test-id='button-hide-reviews'
        tabIndex={0}
        className={cx('head', { hasReviews: reviews.length }, { open: isOpen })}
      >
        <div className={styles.subtitle}>Отзывы</div>
        <div className={styles.count}>{reviews.length}</div>
        <button type='button' className={cx('chevron', { hasReviews: reviews.length }, { open: isOpen })}>
          <ChevronIconDark />
        </button>
      </div>

      {!!reviews.length && (
        <div className={cx('reviewers', { open: isOpen })}>
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
