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
          <Link to={`/books/${bookCategory}`} data-test-id='breadcrumbs-link'>
            <span className={styles.category}>{extractedCategory ?? 'Все книги'}</span>
          </Link>{' '}
          <span className={styles.divider}>/</span>
          <span data-test-id='book-name'>{title}</span>
        </div>
      </div>
    </div>
  );
};
