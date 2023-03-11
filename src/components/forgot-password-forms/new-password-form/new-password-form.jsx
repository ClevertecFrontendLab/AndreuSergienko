/* eslint-disable no-negated-condition */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IconEyeClose, IconEyeOpen, IconOkey } from 'assets/images/auth';
import classNames from 'classnames/bind';
import { fetchResetPassword } from 'store';
import { setForgotPasswordStatusAC } from 'store/reducers/forgot-password-reducer';

import stylesCommon from '../forgot-password.module.css';
import stylesLocal from './new-password-form.module.css';

export const NewPasswordForm = () => {
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState('');
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isNewPasswordPlaceholder, setIsNewPasswordPlaceholder] = useState(false);

  const [newRepeatPassword, setNewRepeatPassword] = useState('');
  const [isNewRepeatPasswordValid, setIsNewRepeatPasswordValid] = useState(true);
  const [isNewRepeatPasswordPlaceholder, setIsNewRepeatPasswordPlaceholder] = useState(false);

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isNewRepeatPasswordVisible, setIsNewRepeatPasswordVisible] = useState(false);

  const [hasNewPasswordChecked, setHasNewPasswordChecked] = useState(false);

  const {
    register,
    reset,
    resetField,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const formStyles = {
    input: stylesCommon.input,
    error: stylesCommon.inputError,
    focusedPlaceholder: stylesCommon.focusedPlaceholder,
    placeholderActive: stylesCommon.placeholderActive,
    btnLocal: stylesLocal.btn,
    btnCommon: stylesCommon.btn,
    iconSuccess: stylesCommon.iconSuccess,
    iconSuccessActive: stylesCommon.iconSuccessActive,
    iconEye: stylesCommon.iconEye,
  };

  const refTipNewPassword = useRef();
  const refTipNewRepeatPassword = useRef();

  useEffect(() => {
    const subscription = watch((value) => {
      setNewPassword(value?.password);
      setNewRepeatPassword(value?.passwordConfirmation);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };

  // eslint-disable-next-line complexity
  const validNewPassword = (value) => {
    if (!value || !value.length) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль не менее 8 символов, с заглавной буквой и цифрой
        </p>
      );
    }

    const number = value?.match(/[0-9]{1,}/);
    const passwordLength = value.length > 7;
    const upperLetter = value?.match(/[A-ZА-Я]{1,}/);

    if (number && !passwordLength && upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль <mark style={{ color: '#F42C4F', background: 'none' }}> не менее 8 символов</mark>, с заглавной буквой
          и цифрой
        </p>
      );
    }

    if (number && passwordLength && !upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль не менее 8 символов,<mark style={{ color: '#F42C4F', background: 'none' }}> с заглавной буквой </mark>и
          цифрой
        </p>
      );
    }

    if (number && passwordLength && upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль не менее 8 символов, с заглавной буквой и цифрой
        </p>
      );
    }

    if (number && !passwordLength && !upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль <mark style={{ color: '#F42C4F', background: 'none' }}> не менее 8 символов</mark>,
          <mark style={{ color: '#F42C4F', background: 'none' }}>с заглавной буквой </mark>и цифрой
        </p>
      );
    }

    if (!number && passwordLength && upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль не менее 8 символов, с заглавной буквой и
          <mark style={{ color: '#F42C4F', background: 'none' }}> цифрой</mark>
        </p>
      );
    }

    if (!number && passwordLength && !upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль не менее 8 символов,<mark style={{ color: '#F42C4F', background: 'none' }}> с заглавной буквой </mark>и
          <mark style={{ color: '#F42C4F', background: 'none' }}> цифрой</mark>
        </p>
      );
    }

    if (!number && !passwordLength && upperLetter) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewPassword} data-test-id='hint'>
          Пароль<mark style={{ color: '#F42C4F', background: 'none' }}> не менее 8 символов</mark>, с заглавной буквой и
          <mark style={{ color: '#F42C4F', background: 'none' }}> цифрой</mark>
        </p>
      );
    }

    return (
      <p className={stylesCommon.inputTip} ref={refTipNewPassword} style={{ color: '#F42C4F' }} data-test-id='hint'>
        Пароль не менее 8 символов, с заглавной буквой и цифрой
      </p>
    );
  };
  const onBlurNewPassword = (value) => {
    if (!newPassword.length) {
      setIsNewPasswordPlaceholder(false);
    }
    if (newPassword.length && newRepeatPassword.length && newPassword !== newRepeatPassword) {
      setIsNewRepeatPasswordValid(false);
    }
    if (value.match(/(?=.*[A-Z])(?=.*[0-9])[a-zA-ZА-Яа-я0-9]{8,}/)) {
      setIsNewPasswordValid(true);
      setHasNewPasswordChecked(true);
    } else {
      setIsNewPasswordValid(false);
      setHasNewPasswordChecked(false);
      refTipNewPassword.current.style.color = '#F42C4F';
    }
  };
  const onFocusNewPassword = () => {
    setIsNewPasswordPlaceholder(true);
    refTipNewPassword.current.style.color = '#a7a7a7';
  };

  const validNewRepeatPassword = (password, repeatPassword) => {
    if (!repeatPassword || !repeatPassword.length) {
      return <span data-test-id='hint'>&nbsp;</span>;
    }
    if (password.length && repeatPassword !== password) {
      return (
        <p className={stylesCommon.inputTip} ref={refTipNewRepeatPassword} data-test-id='hint'>
          <mark style={{ color: '#F42C4F', background: 'none' }}> Пароль не совпадают</mark>
        </p>
      );
    }

    return <span data-test-id='hint'>&nbsp;</span>;
  };
  const onBlurNewRepeatPassword = () => {
    if (!newRepeatPassword.length) {
      setIsNewRepeatPasswordPlaceholder(false);
      setIsNewRepeatPasswordValid(true);
    } else if (newPassword.length && newRepeatPassword === newPassword) {
      setIsNewRepeatPasswordValid(true);
    } else if (newPassword.length && newRepeatPassword.length && newRepeatPassword !== newPassword) {
      setIsNewRepeatPasswordValid(false);
    }
  };
  const onFocusNewRepeatPassword = () => {
    setIsNewRepeatPasswordPlaceholder(true);
  };

  const query = useQuery();

  const onSubmit = (data) => {
    dispatch(setForgotPasswordStatusAC(''));
    dispatch(fetchResetPassword({ ...data, code: query.get('code') }));
  };

  const cx = classNames.bind(formStyles);

  return (
    <div className={stylesLocal.formWrapper}>
      <h4 className={stylesCommon.formTitle}>Восстановление пароля</h4>
      <form className={stylesCommon.form} onSubmit={handleSubmit(onSubmit)} data-teset-id='reset-password-form'>
        <div className={stylesLocal.field}>
          <input
            {...register('password', {
              onBlur: (e) => onBlurNewPassword(e.target.value),
            })}
            onFocus={onFocusNewPassword}
            className={cx('input', { error: !isNewPasswordValid }, { placeholderActive: isNewPasswordPlaceholder })}
            value={newPassword}
            name='password'
            type={isNewPasswordVisible ? 'text' : 'password'}
            placeholder='Новый пароль'
          />
          <span className={cx('focusedPlaceholder', { placeholderActive: isNewPasswordPlaceholder })}>
            Новый пароль
          </span>

          <span className={cx('iconSuccess', { iconSuccessActive: hasNewPasswordChecked })} data-test-id='checkmark'>
            {IconOkey}
          </span>
          <button
            className={stylesCommon.iconEye}
            type='button'
            onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
          >
            {isNewPasswordVisible ? (
              <span data-test-id='eye-closed'>{IconEyeClose}</span>
            ) : (
              <span data-test-id='eye-opened'>{IconEyeOpen}</span>
            )}
          </button>

          {errors?.password ? validNewPassword(newPassword) : validNewPassword(newPassword)}
        </div>

        <div className={stylesLocal.field}>
          <input
            {...register('passwordConfirmation', {
              onBlur: (e) => onBlurNewRepeatPassword(e.target.value),
            })}
            onFocus={onFocusNewRepeatPassword}
            className={cx(
              'input',
              { error: !isNewRepeatPasswordValid },
              { placeholderActive: isNewRepeatPasswordPlaceholder }
            )}
            name='passwordConfirmation'
            value={newRepeatPassword}
            type={isNewRepeatPasswordVisible ? 'text' : 'password'}
            placeholder='Повторите пароль'
          />
          <span className={cx('focusedPlaceholder', { placeholderActive: isNewRepeatPasswordPlaceholder })}>
            Повторите пароль
          </span>

          <button
            className={stylesCommon.iconEye}
            type='button'
            onClick={() => setIsNewRepeatPasswordVisible(!isNewRepeatPasswordVisible)}
          >
            {isNewRepeatPasswordVisible ? (
              <span data-test-id='eye-closed'>{IconEyeClose}</span>
            ) : (
              <span data-test-id='eye-opened'>{IconEyeOpen}</span>
            )}
          </button>
          {errors?.passwordConfirmation
            ? validNewRepeatPassword(newPassword, newRepeatPassword)
            : validNewRepeatPassword(newPassword, newRepeatPassword)}
        </div>

        <button type='submit' className={cx('btnLocal', 'btnCommon')}>
          сохранить изменения
        </button>
      </form>
    </div>
  );
};
