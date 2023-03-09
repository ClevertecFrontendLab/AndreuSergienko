import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignIn, setAuthStatusAC, setRegStatusAC } from 'store';

/* eslint-disable react/button-has-type */
import styles from './feedaback-modal.module.css';

export const FeedbackModal = ({ title, errorText, link }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);
  const authFormData = useSelector((state) => state.form.authData);

  const handleClick = () => {
    dispatch(setRegStatusAC(''));
    dispatch(setAuthStatusAC(''));
    if (link.path) {
      navigate(link.path);
    }
    if (authStatus) {
      dispatch(fetchSignIn(authFormData));
    }
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
