import { useDispatch } from 'react-redux';
import { setErrorAC } from 'store';

import { ErrorIcon, CrossIcon } from 'assets/images/error';

import styles from './error-tooltip.module.css';

export const ErrorTooltip = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setErrorAC(false));
  };

  return (
    <div className={styles.wrapper} data-test-id='error'>
      <span className={styles.errorIcon}>
        <ErrorIcon />
      </span>
      <span className={styles.message}>Что-то пошло не так. Обновите страницу через некоторое время.</span>
      <button type='button' className={styles.crossIcon} onClick={handleClick}>
        <CrossIcon />
      </button>
    </div>
  );
};
