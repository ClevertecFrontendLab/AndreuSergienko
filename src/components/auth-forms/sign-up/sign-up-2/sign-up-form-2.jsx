import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { setRegFormDataAC } from 'store';

import styles from '../sign-up-form.module.css';

export const SignUpFormSecond = ({ changeStep }) => {
  const dispatch = useDispatch();

  const formStyles = {
    input: styles.input,
    focusedPlaceholder: styles.focusedPlaceholder,
    placeholderActive: styles.placeholderActive,
  };

  const cx = classNames.bind(formStyles);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: 'onBlur' });

  const [isDisabled, setIsDisabled] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [isFirstNamePlaceholder, setIsFirstNamePlaceholder] = useState(false);
  const [isLastNamePlaceholder, setIsLastNamePlaceholder] = useState(false);

  useEffect(() => {
    const subscription = watch((value) => {
      setFirstName(value?.firstName);
      setLastName(value?.lastName);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const checkIsFieldsValid = (data) => {
    if (!isDisabled && firstName && lastName) {
      dispatch(setRegFormDataAC(data));
      changeStep();
    } else {
      setIsDisabled(true);
    }
  };

  const onSubmit = (data) => {
    checkIsFieldsValid(data);
  };

  const onFirstNameBlur = (value) => {
    setFirstName(value);
    if (!firstName.length) {
      setIsFirstNamePlaceholder(false);
    }
  };

  const onFirstNameFocus = () => {
    setIsFirstNamePlaceholder(true);
  };

  const onLastNameFocus = () => {
    setIsLastNamePlaceholder(true);
  };

  const onLastNameBlur = (value) => {
    setLastName(value);
    if (!lastName.length) {
      setIsLastNamePlaceholder(false);
    }
  };

  useMemo(() => {
    if (firstName && lastName) {
      setIsDisabled(false);
    }
  }, [firstName, lastName]);

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
              onBlur: (e) => onFirstNameBlur(e.target.value),
            })}
            value={firstName}
            onFocus={onFirstNameFocus}
            name='firstName'
            className={cx('input', { placeholderActive: isFirstNamePlaceholder })}
            type='text'
            placeholder='Имя'
          />

          <span className={cx('focusedPlaceholder', { placeholderActive: isFirstNamePlaceholder })}>Имя</span>

          {errors?.firstName && (
            <span style={{ color: '#f42c4f' }} className={styles.inputTip}>
              Поле не должно быть пустым
            </span>
          )}
        </div>

        <div className={styles.field}>
          <input
            {...register('lastName', {
              required: true,
              onBlur: (e) => onLastNameBlur(e.target.value),
            })}
            onFocus={onLastNameFocus}
            value={lastName}
            name='lastName'
            className={cx('input', { placeholderActive: isLastNamePlaceholder })}
            type='text'
            placeholder='Фамилия'
          />
          <span className={cx('focusedPlaceholder', { placeholderActive: isLastNamePlaceholder })}>Фамилия</span>

          {errors?.lastName && (
            <span style={{ color: '#f42c4f' }} className={styles.inputTip}>
              Поле не должно быть пустым
            </span>
          )}
        </div>
      </div>

      <button type='submit' disabled={isDisabled} className={styles.nextStepBtn}>
        последний шаг
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
