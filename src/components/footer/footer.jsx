import { facebook, insta, vk, linkedin } from 'assets/images/footer';
import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className='app-container'>
      <div className={styles.inners}>
        <p className={styles.copyright}>&copy;&nbsp;2020-2023&nbsp;Cleverland. Все права защищены.</p>
        <div className={styles.socials}>
          <img src={facebook} alt='Vk' className={styles.icon} />
          <img src={insta} alt='Instagram' className={styles.icon} />
          <img src={vk} alt='LinkedIn' className={styles.icon} />
          <img src={linkedin} alt='Facebook' className={styles.icon} />
        </div>
      </div>
    </div>
  </footer>
);
