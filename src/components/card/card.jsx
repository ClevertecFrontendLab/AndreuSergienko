import { useSelector } from 'react-redux';

import { CardByList, CardByTile } from './card-group-by-layout';

export const Card = ({ book, groupBy }) => {
  const term = useSelector((state) => state.search.term);

  switch (groupBy) {
    case 'groupByList':
      return <CardByList book={book} term={term} />;
    default:
      return <CardByTile book={book} term={term} />;
  }
};
