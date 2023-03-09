import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { fetchSignUp, setFormDataAC, setRegFormDataAC } from 'store';

import styles from '../sign-up-form.module.css';

export const SignUpFormFinal = () => {
  const dispatch = useDispatch();
  const regFormData = useSelector((state) => state.form.regData);

  const {
    register,
    reset,
    resetField,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const [isTelValid, setIsTelValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isTelPlaceholder, setIsTelPlaceholder] = useState(false);
  const [isEmailPlaceholder, setIsEmailPlaceholder] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const subscription = watch((value) => {
      setTel(value?.phone);
      setEmail(value?.email);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const formStyles = {
    input: styles.input,
    focusedPlaceholder: styles.focusedPlaceholder,
    placeholderActive: styles.placeholderActive,
  };

  const cx = classNames.bind(formStyles);

  const onBlurTel = (value) => {
    setTel(value);
    if (!value.length) {
      setIsTelPlaceholder(false);
    }
    if (!value.includes('_') && value !== '') {
      setIsTelValid(true);
    }
  };

  const onBlurEmail = (value) => {
    setEmail(value);
    if (!email.length) {
      setIsEmailPlaceholder(false);
    }
    if (value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/) && value !== '') {
      setIsEmailValid(true);
    }
  };

  const onTelFocus = (value) => {
    setIsTelPlaceholder(true);
    setTel(value);
  };

  const onEmailFocus = () => {
    setIsEmailPlaceholder(true);
  };

  const validEmail = (value) => {
    if (!value || !value.length) {
      return '';
    }

    if (!value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
      return (
        <p className={styles.inputTip} style={{ color: '#F42C4F' }}>
          Введите корректный e-mail
        </p>
      );
    }

    return '';
  };
  const validTel = (value) => {
    if (!value || !value.length) {
      <p className={styles.inputTip}>В формате +375 (xx) xxx-xx-xx</p>;
    }

    if (value?.includes('_')) {
      return (
        <p className={styles.inputTip} style={{ color: '#F42C4F' }}>
          В формате +375 (xx) xxx-xx-xx
        </p>
      );
    }

    return <p className={styles.inputTip}>В формате +375 (xx) xxx-xx-xx</p>;
  };

  const onSubmit = (data) => {
    if (!isDisabled && isTelValid && isEmailValid) {
      dispatch(setRegFormDataAC(data));
      dispatch(fetchSignUp({ ...regFormData, ...data }));
    } else {
      setIsDisabled(true);
    }
  };

  useMemo(() => {
    if (isEmailValid && isTelValid) {
      setIsDisabled(false);
    }
  }, [isTelValid, isEmailValid]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.formTitle}>Регистрация</h4>
      <div className={styles.steps}>
        <span>3</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <InputMask
            {...register('phone', {
              onBlur: (e) => onBlurTel(e.target.value),
            })}
            onFocus={(e) => onTelFocus(e.target.value)}
            value={tel}
            className={cx('input', { placeholderActive: isTelPlaceholder })}
            type='tel'
            mask='+375(99)999-99-99'
            placeholder='Номер телефона'
          />

          <span className={cx('focusedPlaceholder', { placeholderActive: isTelPlaceholder })}>Номер телефона</span>

          {errors?.phone ? validTel(tel) : validTel(tel)}
        </div>

        <div className={styles.field}>
          <input
            {...register('email', {
              onBlur: (e) => onBlurEmail(e.target.value),
            })}
            onFocus={onEmailFocus}
            value={email}
            className={cx('input', { placeholderActive: isEmailPlaceholder })}
            type='email'
            placeholder='E-mail'
          />
          <span className={cx('focusedPlaceholder', { placeholderActive: isEmailPlaceholder })}>E-mail</span>

          {errors?.email ? validEmail(email) : validEmail(email)}
        </div>
      </div>

      <button type='submit' disabled={isDisabled} className={styles.nextStepBtn}>
        зарегистрироваться
      </button>

      <div className={styles.hasAccount}>
        <span className={styles.sign}>Есть учётная запись?</span>
        <Link to='/auth'>
          <span className={styles.signInLink}>войти</span>
        </Link>
      </div>
    </form>
  );
};
