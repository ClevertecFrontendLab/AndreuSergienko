import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { SIGN_IN_FORM as signInForm } from '../../../constants';

import styles from './sign-in-form.module.css';

export const SignInForm = () => {
  const { inputs, link, buttonContent } = signInForm;

  return (
    <form className={styles.form}>
      <h4 className={styles.formTitle}>Вход в личный кабинет</h4>
      <div className={styles.fields}>
        {inputs?.map((input) => (
          <div className={styles.field} key={uuidv4()}>
            <input className={styles.input} type={input.type} placeholder={input.placeholder} />
            {input.tip ? <span className={styles.inputTip}>{input.tip}</span> : null}
          </div>
        ))}
      </div>

      <button type='button' className={styles.signInBtn}>
        {buttonContent}
      </button>

      <div className={styles.hasNoAccount}>
        <span className={styles.sign}>Нет учётной записи?</span>
        <Link to={link.path}>
          <span className={styles.signUpLink}>{link.content}</span>
        </Link>
      </div>
    </form>
  );
};
