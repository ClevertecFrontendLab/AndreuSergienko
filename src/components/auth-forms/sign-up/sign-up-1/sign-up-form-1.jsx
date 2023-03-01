/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styles from '../sign-up-form.module.css';

export const SignUpFormFirst = ({ changeStep }) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({ mode: 'onChange' });

  const [login, setLogin] = useState('');

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      setLogin(value.login);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleClick = () => {
    changeStep();
  };

  const validValue = (value) => {
    if (!value || !value.length) {
      return <span style={{ color: 'red' }}>Используйте для логина латинский алфавит и цифры</span>;
    }

    const hasEnLetters = value.match(/[a-zA-Z]+/g);
    const hasRULetters = value.match(/[а-яА-Я]+/g);
    const hasNumbers = value.match(/[0-9]+/g);

    if (hasNumbers && hasEnLetters && hasRULetters) {
      return (
        <span>
          Используйте для логина <span style={{ color: 'red' }}>латинский алфавит</span> и цифры
        </span>
      );
    }

    if (hasRULetters && !hasNumbers) {
      return (
        <span>
          Используйте для логина <span style={{ color: 'red' }}>латинский алфавит и цифры</span>
        </span>
      );
    }

    if (hasNumbers && !hasRULetters) {
      return (
        <span>
          Используйте для логина <span style={{ color: 'red' }}>латинский алфавит</span> и цифры
        </span>
      );
    }

    if (!hasNumbers && hasEnLetters) {
      return (
        <span>
          Используйте для логина латинский алфавит и <span style={{ color: 'red' }}>цифры</span>
        </span>
      );
    }

    if (!hasEnLetters && hasNumbers) {
      return (
        <span>
          Используйте для логина <span style={{ color: 'red' }}>латинский алфавит </span>и цифры
        </span>
      );
    }

    return 'Используйте для логина латинский алфавит и цифры';
  };

  const validatedLogin = validValue(login);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.formTitle}>Регистрация</h4>
      <div className={styles.steps}>
        <span>1</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input
            {...register('login', {
              required: true,
              pattern: /[a-zA-Z][0-9]|[0-9][a-zA-Z]/gm,
            })}
            name='login'
            value={login}
            className={styles.input}
            type='text'
            placeholder='Придумайте логин для входа'
          />
          {errors?.login ? (
            <span className={styles.inputTip}>{validatedLogin}</span>
          ) : (
            <span className={styles.inputTip}>Используйте для логина латинский алфавит и цифры</span>
          )}
        </div>

        <div className={styles.field}>
          <input
            {...register('password', {
              required: true,
            })}
            name='password'
            className={styles.input}
            type='password'
            placeholder='Пароль'
          />
          <span className={styles.inputTip}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
        </div>
      </div>

      <button type='button' className={styles.nextStepBtn} onClick={handleClick}>
        следующий шаг
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
