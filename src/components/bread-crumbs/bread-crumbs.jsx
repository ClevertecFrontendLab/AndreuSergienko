import { useParams } from 'react-router-dom';
import { categories } from 'constants';

import styles from './bread-crumbs.module.css';

export const BreadCrumbs = ({ title }) => {
  const { bookCategory } = useParams();

  const extractedCategory = categories.find((item) => item.path === bookCategory)?.name;

  return (
    <div className={styles.breadCrumbs}>
      <div className='app-container'>
        <div className={styles.inner}>
          <span>{extractedCategory ?? 'Все книги'}</span> <span className={styles.divider}>/</span> {title}
        </div>
      </div>
    </div>
  );
};
