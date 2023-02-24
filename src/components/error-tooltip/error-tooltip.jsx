import { useDispatch } from 'react-redux';
import { setBooksErrorAC, setCategoriesErrorAC, setCurrBookErrorAC } from 'store';

import { CrossIcon, ErrorIcon } from 'assets/images/error';

import styles from './error-tooltip.module.css';

export const ErrorTooltip = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setBooksErrorAC(false));
    dispatch(setCategoriesErrorAC(false));
    dispatch(setCurrBookErrorAC(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner} data-test-id='error'>
        <span className={styles.errorIcon}>
          <ErrorIcon />
        </span>
        <span className={styles.message}>Что-то пошло не так. Обновите страницу через некоторое время.</span>
        <button type='button' className={styles.crossIcon} onClick={handleClick}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};
