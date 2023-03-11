import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronIcon } from 'assets/images/forgot-password';
import classNames from 'classnames/bind';
import { fetchForgotPassword } from 'store';

import styles from './email-form.module.css';

export const EmailForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    resetField,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailPlaceholder, setIsEmailPlaceholder] = useState(false);

  useEffect(() => {
    const subscription = watch((value) => {
      setEmail(value?.email);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onBlurEmail = (value) => {
    setEmail(value);
    if (!email.length) {
      setIsEmailPlaceholder(false);
    }
    if (value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/) && value !== '') {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const formStyles = {
    input: styles.input,
    error: styles.inputError,
    focusedPlaceholder: styles.focusedPlaceholder,
    placeholderActive: styles.placeholderActive,
  };

  const cx = classNames.bind(formStyles);

  const onEmailFocus = () => {
    setIsEmailPlaceholder(true);
  };

  const validEmail = (value) => {
    if (!value || !value.length) {
      return <span data-test-id='hint'>&nsbp;</span>;
    }

    if (!value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
      return (
        <p className={styles.inputTip} style={{ color: '#F42C4F' }} data-test-id='hint'>
          Введите корректный e-mail
        </p>
      );
    }

    return <span data-test-id='hint'>&nbsp;</span>;
  };

  const onSubmit = (data) => {
    dispatch(fetchForgotPassword(data));
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.redirectToAuth}>
        <Link to='/auth' className={styles.redirectToAuthLink}>
          <span className={styles.chevronIcon}>
            <ChevronIcon />
          </span>
          <span className={styles.redirectText}>вход в личный кабинет</span>
        </Link>
      </div>
      <div className={styles.formInnerWrapper}>
        <h4 className={styles.formTitle}>Восстановление пароля</h4>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} data-teset-id='send-email-form'>
          <div className={styles.field}>
            <input
              {...register('email', {
                onBlur: (e) => onBlurEmail(e.target.value),
              })}
              onFocus={onEmailFocus}
              className={cx('input', { error: !isEmailValid }, { placeholderActive: isEmailPlaceholder })}
              value={email}
              name='email'
              type='email'
              placeholder='Email'
            />
            <span className={cx('focusedPlaceholder', { placeholderActive: isEmailPlaceholder })}>E-mail</span>
            {errors?.email ? validEmail(email) : validEmail(email)}
            <p className={styles.inputTip} data-test-id='hint'>
              На это email будет отправлено письмо с инструкциями по восстановлению пароля
            </p>
          </div>

          <button type='submit' className={styles.resetBtn}>
            восстановить
          </button>

          <div className={styles.hasNoAccount}>
            <span className={styles.sign}>Нет учётной записи?</span>
            <Link to='/registration'>
              <span className={styles.signUpLink}>регистрация</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
