import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSignIn } from 'store';

import styles from './sign-in-form.module.css';

export const SignInForm = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const jwt = localStorage.getItem('jwt');
    
    dispatch(fetchSignIn(data, jwt));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.formTitle}>Вход в личный кабинет</h4>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input {...register('identifier')} className={styles.input} name='identifier' type='text' placeholder='Логин' />
          {/* {input.tip ? <span className={styles.inputTip}>{input.tip}</span> : null} */}
        </div>

        <div className={styles.field}>
          <input
            {...register('password')}
            className={styles.input}
            type='password'
            name='password'
            placeholder='Пароль'
          />
          {/* {input.tip ? <span className={styles.inputTip}>{input.tip}</span> : null} */}
        </div>
      </div>

      <button type='submit' className={styles.signInBtn}>
        войти
      </button>

      <div className={styles.hasNoAccount}>
        <span className={styles.sign}>Нет учётной записи?</span>
        <Link to='/registration'>
          <span className={styles.signUpLink}>регистрация</span>
        </Link>
      </div>
    </form>
  );
};
