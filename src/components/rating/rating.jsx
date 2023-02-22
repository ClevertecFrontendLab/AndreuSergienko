import { v4 as uuidv4 } from 'uuid';

import { emptyStar, star } from 'assets/images/main-page/books';

export const Rating = ({ length }) => {
  if (!length) return 'ещё нет оценок';

  const fullStarsLength = 5;

  const starRating = new Array(length).fill(null).map((_, i) => <img key={uuidv4()} src={star} alt='star' />);

  const missingStarsLength = 5 - starRating.length;

  if (starRating.length !== fullStarsLength) {
    const missingStars = new Array(missingStarsLength)
      .fill(null)
      .map(() => <img src={emptyStar} key={uuidv4()} alt='empty-star' />);
    return starRating.concat(missingStars);
  }

  return starRating;
};
