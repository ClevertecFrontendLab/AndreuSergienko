import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { FeedbackModal } from 'components';

import { ERRORS, FAILED_FB, NON_UNIQUE_FB, SUCCESS_FB } from '../../constants';

import styles from './auth-page.module.css';

export const AuthPage = () => {
  const regStatus = useSelector((state) => state.registration.status);

  const uniqueModal = regStatus === ERRORS.uniques && <FeedbackModal {...NON_UNIQUE_FB} />;

  const nonValidateModal = regStatus === ERRORS.nonValidate && <FeedbackModal {...FAILED_FB} />;

  const success = regStatus === 'OK' && <FeedbackModal {...SUCCESS_FB} />;

  return (
    <div className={styles.canvas}>
      <h3 className={styles.title}>Cleverland</h3>
      {success || uniqueModal || nonValidateModal || <Outlet />}
    </div>
  );
};
