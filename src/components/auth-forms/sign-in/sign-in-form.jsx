import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IconEyeClose, IconEyeOpen } from 'assets/images/auth';
import classNames from 'classnames/bind';
import { fetchSignIn, setAuthFormDataAC } from 'store';

import styles from './sign-in-form.module.css';

export const SignInForm = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const formStyles = {
    input: styles.input,
    inputError: styles.inputError,
  };

  const cx = classNames.bind(formStyles);

  useEffect(() => {
    if (authStatus === 200) {
      navigate('/books/all');
    }
  }, [authStatus, navigate]);

  const onSubmit = (data) => {
    dispatch(setAuthFormDataAC(data));
    dispatch(fetchSignIn(data));
  };

  return (
    <div data-test-id='auth'>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
        <h4 className={styles.formTitle}>Вход в личный кабинет</h4>
        <div className={styles.fields}>
          <div className={styles.field}>
            <input
              {...register('identifier')}
              className={cx('input', { inputError: authStatus === 400 })}
              name='identifier'
              type='text'
              placeholder='Логин'
            />
            {/* {input.tip ? <span className={styles.inputTip}>{input.tip}</span> : null} */}
          </div>

          <div className={styles.field}>
            <input
              {...register('password')}
              className={cx('input', { inputError: authStatus === 400 })}
              type={isPasswordVisible ? 'text' : 'password'}
              name='password'
              placeholder='Пароль'
            />

            <button className={styles.iconEye} type='button' onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? IconEyeOpen : IconEyeClose}
            </button>
          </div>
        </div>

        {authStatus === 400 ? (
          <div className={styles.failedBlock}>
            <span className={styles.failedTip}>Неверный логин или пароль!</span>
            <Link className={styles.failedTip}>Восстановить?</Link>
          </div>
        ) : (
          <div className={styles.defaultTip}>
            <Link to='/forgot-pass'>Забыли логин или пароль?</Link>
          </div>
        )}

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
    </div>
  );
};
