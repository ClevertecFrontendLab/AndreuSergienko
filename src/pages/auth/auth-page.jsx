import { Outlet } from 'react-router-dom';

import styles from './auth-page.module.css';

export const AuthPage = () => (
  <div className={styles.canvas}>
    <h3 className={styles.title}>Cleverland</h3>
    <Outlet />
  </div>
);
