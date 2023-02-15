import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components';

import styles from './layout-main-page.module.css';

export const LayoutMainPage = () => (
  <div className={styles.layout}>
    <div className='app-container'>
      <div className={styles.layoutInner}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  </div>
);
