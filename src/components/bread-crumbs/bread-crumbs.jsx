import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styles from './bread-crumbs.module.css';

export const BreadCrumbs = ({ title }) => {
  const { bookCategory } = useParams();
  const categories = useSelector((state) => state.categories.categoriesList);

  const extractedCategory = categories?.find((item) => item.path === bookCategory)?.name;

  return (
    <div className={styles.breadCrumbs}>
      <div className='app-container'>
        <div className={styles.inner}>
          <Link to={`/books/${bookCategory}`}>
            <span className={styles.category}>{extractedCategory ?? 'Все книги'}</span>
          </Link>{' '}
          <span className={styles.divider}>/</span> {title}
        </div>
      </div>
    </div>
  );
};
