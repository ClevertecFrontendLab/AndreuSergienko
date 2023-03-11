import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/button-has-type */
import styles from './feedback-modal.module.css';

export const FeedbackModal = ({ title, errorText, link = null }) => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (link.path) {
      navigate(link.path);
    }
  };

  return (
    <div className={styles.modal} data-test-id='status-block'>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.errorText}>{errorText}</p>
      {link && (
        <button type='button' className={styles.button} onClick={handleClick}>
          {link.content}
        </button>
      )}
    </div>
  );
};
