/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/button-has-type */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styles from '../sign-up-form.module.css';

export const SignUpFormFinal = ({ changeStep }) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const handleClick = () => {
    changeStep();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.formTitle}>Регистрация</h4>
      <div className={styles.steps}>
        <span>3</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input
            {...register('tel', {
              required: true,
            })}
            className={styles.input}
            type='tel'
            placeholder='Номер телефона'
          />
          <span className={styles.inputTip}>В формате +375 (xx) xxx-xx-xx</span>
        </div>

        <div className={styles.field}>
          <input
            {...register('email', {
              required: true,
            })}
            className={styles.input}
            type='email'
            placeholder='E-mail'
          />
          {console.log(errors)}
          {errors?.email && <span className={styles.inputTip}>Введите корректный email</span>}
        </div>
      </div>

      <button type='submit' className={styles.nextStepBtn} onClick={handleClick}>
        зарегистрироваться
      </button>

      <div className={styles.hasAccount}>
        <span className={styles.sign}>Есть учётная запись?</span>
        <Link to='/signIn'>
          <span className={styles.signInLink}>войти</span>
        </Link>
      </div>
    </form>
  );
};
