/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/button-has-type */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styles from '../sign-up-form.module.css';

export const SignUpFormSecond = ({ changeStep }) => {
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
        <span>2</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input
            {...register('firstName', {
              required: true,
            })}
            name='firstName'
            className={styles.input}
            type='text'
            placeholder='Имя'
          />
          {errors?.firstName && <span className={styles.inputTip}>Поле не должно быть пустым</span>}
        </div>

        <div className={styles.field}>
          <input
            {...register('lastName', {
              required: true,
            })}
            name='lastName'
            className={styles.input}
            type='text'
            placeholder='Фамилия'
          />

          {errors?.lastName && <span className={styles.inputTip}>Поле не должно быть пустым</span>}
        </div>
      </div>

      <button type='button' className={styles.nextStepBtn} onClick={handleClick}>
        последний шаг
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
