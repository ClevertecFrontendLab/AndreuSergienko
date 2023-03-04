import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegStatusAC } from 'store';

/* eslint-disable react/button-has-type */
import styles from './feedaback-modal.module.css';

export const FeedbackModal = ({ title, errorText, link }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setRegStatusAC(''));
    navigate(link.path);
  };

  return (
    <div className={styles.modal}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.errorText}>{errorText}</p>
      <button type='button' className={styles.button} onClick={handleClick}>
        {link.content}
      </button>
    </div>
  );
};
