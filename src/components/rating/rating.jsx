import { star, emptyStar } from 'assets/images/main-page/books';

export const Rating = ({ length }) => {
  if (!length) return 'ещё нет оценок';

  const fullStarsLength = 5;

  const starRating = new Array(length)
    .fill(null)
    .map((_, i) => <img key={Math.random() * length} src={star} alt='star' />);

  const missingStarsLength = 5 - starRating.length;

  if (starRating.length !== fullStarsLength) {
    const missingStars = new Array(missingStarsLength)
      .fill(null)
      .map(() => <img key={Math.random() * length} src={emptyStar} alt='empty-star' />);
    return starRating.concat(missingStars);
  }

  return starRating;
};
