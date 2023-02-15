import { CardByTile, CardByList } from './card-group-by-layout';

export const Card = ({ book, groupBy }) => {
  switch (groupBy) {
    case 'groupByList':
      return <CardByList book={book} />;
    default:
      return <CardByTile book={book} />;
  }
};
