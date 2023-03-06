import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconEyeClose, IconEyeOpen, IconOkey } from 'assets/images/auth';
import classNames from 'classnames/bind';
import { setFormDataAC } from 'store';

import styles from '../sign-up-form.module.css';

export const SignUpFormFirst = ({ changeStep }) => {
  const dispatch = useDispatch();

  const formStyles = {
    input: styles.input,
    error: styles.inputError,
    focusedPlaceholder: styles.focusedPlaceholder,
    placeholderActive: styles.placeholderActive,
    iconSuccess: styles.iconSuccess,
    iconSuccessActive: styles.iconSuccessActive,
    iconEye: styles.iconEye,
  };

  const cx = classNames.bind(formStyles);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onBlur' });

  const refTipLogin = useRef();
  const refTipPassword = useRef();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [isDisabled, setIsDisabled] = useState(false);

  const [isLoginPlaceholder, setIsLoginPlaceholder] = useState(false);
  const [isPasswordPlaceholder, setIsPasswordPlaceholder] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const subscription = watch((value) => {
      setLogin(value?.username);
      setPassword(value?.password);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useMemo(() => {
    if (isLoginValid && isPasswordValid && watch('login') && watch('password')) {
      setIsDisabled(false);
    }
  }, [isLoginValid, isPasswordValid, watch]);

  // eslint-disable-next-line complexity
  const validLogin = (value) => {
    if (!value || !value.length) {
      return (
        <p ref={refTipLogin} className={styles.inputTip}>
          Используйте для логина латинский алфавит и цифры
        </p>
      );
    }

    const number = value?.match(/[0-9]/);
    const enLetter = value?.match(/[A-Za-z]/);
    const ruLetter = value?.match(/[А-яа-я]/);

    if (!enLetter && number && ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip}>
          Используйте для логина
          <mark style={{ color: '#F42C4F', background: 'none' }}> латинский алфавит</mark> и цифры
        </p>
      );
    }

    if (!enLetter && !number && ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip} style={{ color: '#F42C4F' }}>
          Используйте для логина латинский алфавит и цифры
        </p>
      );
    }

    if (enLetter && !number && ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip} style={{ color: '#F42C4F' }}>
          Используйте для логина латинский алфавит и цифры
        </p>
      );
    }

    if (enLetter && number && ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip}>
          Используйте для логина <mark style={{ color: '#F42C4F', background: 'none' }}> латинский алфавит</mark> и
          цифры
        </p>
      );
    }

    if (enLetter && number && !ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip}>
          Используйте для логина латинский алфавит и цифры
        </p>
      );
    }

    if (enLetter && !number && !ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip}>
          Используйте для логина латинский алфавит и<mark style={{ color: '#F42C4F', background: 'none' }}> цифры</mark>
        </p>
      );
    }

    if (!enLetter && number && !ruLetter) {
      return (
        <p ref={refTipLogin} className={styles.inputTip}>
          Используйте для логина <mark style={{ color: '#F42C4F', background: 'none' }}> латинский алфавит</mark> и
          цифры
        </p>
      );
    }

    return (
      <p ref={refTipLogin} className={styles.inputTip}>
        <mark style={{ color: '#F42C4F', background: 'none' }}>Используйте для логина латинский алфавит и цифры</mark>
      </p>
    );
  };

  // eslint-disable-next-line complexity
  const validPassword = (value) => {
    if (!value || !value.length) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль не менее 8 символов, с заглавной буквой и цифрой
        </p>
      );
    }

    const number = value?.match(/[0-9]{1,}/);
    const passwordLength = value.length > 7;
    const upperLetter = value?.match(/[A-ZА-Я]{1,}/);

    if (number && !passwordLength && upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль <mark style={{ color: '#F42C4F', background: 'none' }}> не менее 8 символов</mark>, с заглавной буквой
          и цифрой
        </p>
      );
    }

    if (number && passwordLength && !upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль не менее 8 символов,<mark style={{ color: '#F42C4F', background: 'none' }}> с заглавной буквой </mark>и
          цифрой
        </p>
      );
    }

    if (number && passwordLength && upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль не менее 8 символов, с заглавной буквой и цифрой
        </p>
      );
    }

    if (number && !passwordLength && !upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль <mark style={{ color: '#F42C4F', background: 'none' }}> не менее 8 символов</mark>,
          <mark style={{ color: '#F42C4F', background: 'none' }}> с заглавной буквой </mark>и цифрой
        </p>
      );
    }

    if (!number && passwordLength && upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль не менее 8 символов, с заглавной буквой и
          <mark style={{ color: '#F42C4F', background: 'none' }}> цифрой</mark>
        </p>
      );
    }

    if (!number && passwordLength && !upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль не менее 8 символов,<mark style={{ color: '#F42C4F', background: 'none' }}> с заглавной буквой </mark>и
          <mark style={{ color: '#F42C4F', background: 'none' }}> цифрой</mark>
        </p>
      );
    }

    if (!number && !passwordLength && upperLetter) {
      return (
        <p className={styles.inputTip} ref={refTipPassword}>
          Пароль<mark style={{ color: '#F42C4F', background: 'none' }}> не менее 8 символов </mark>, с заглавной буквой
          и<mark style={{ color: '#F42C4F', background: 'none' }}> цифрой</mark>
        </p>
      );
    }

    return (
      <p className={styles.inputTip} ref={refTipPassword} style={{ color: '#F42C4F' }}>
        Пароль не менее 8 символов, с заглавной буквой и цифрой
      </p>
    );
  };

  const onBlurLogin = (value) => {
    if (!login.length) {
      setIsLoginPlaceholder(false);
    }
    if (value.match(/^(?=^.{1,}$)((?=.*\d)(?=.*[a-zA-Z]))[0-9a-zA-Z]*$/)) {
      setIsLoginValid(true);
    } else {
      setIsLoginValid(false);
      refTipLogin.current.style.color = '#F42C4F';
    }
  };

  const onBlurPassword = (value) => {
    if (!password.length) {
      setIsPasswordPlaceholder(false);
    }
    if (value.match(/(?=.*[A-Z])(?=.*[0-9])[a-zA-ZА-Яа-я0-9]{8,}/)) {
      setIsPasswordValid(true);
      setCheck(true);
    } else {
      setIsPasswordValid(false);
      setCheck(false);
      refTipPassword.current.style.color = '#F42C4F';
    }
  };

  const onFocusLogin = () => {
    setIsLoginPlaceholder(true);
    refTipLogin.current.style.color = '#a7a7a7';
  };

  const onFocusPassword = () => {
    setIsPasswordPlaceholder(true);
    refTipPassword.current.style.color = '#a7a7a7';
  };

  const checkIsFieldsValid = (data) => {
    if (isLoginValid && isPasswordValid && !isDisabled && watch('username') && watch('password')) {
      changeStep();
      dispatch(setFormDataAC(data));
    } else {
      if (!watch('password')) onBlurPassword('');
      if (!watch('username')) onBlurLogin('');
      setIsDisabled(true);
    }
  };

  const onSubmit = (data) => {
    checkIsFieldsValid(data);
  };

  // const handleClick = () => {
  //   if (!isLoginValid && !isPasswordValid) {
  //     setIsDisabled(true);
  //   }
  // };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.formTitle}>Регистрация</h4>
      <div className={styles.steps}>
        <span>1</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input
            {...register('username', {
              required: true,
              onBlur: (e) => onBlurLogin(e.target.value),
            })}
            onFocus={onFocusLogin}
            name='username'
            value={login}
            className={cx('input', { error: !isLoginValid }, { placeholderActive: isLoginPlaceholder })}
            type='text'
            placeholder='Придумайте логин для входа'
          />
          <span className={cx('focusedPlaceholder', { placeholderActive: isLoginPlaceholder })}>
            Придумайте логин для входа
          </span>
          {errors?.login ? validLogin(login) : validLogin(login)}
        </div>

        <div className={styles.field}>
          <input
            {...register('password', {
              required: true,
              onBlur: (e) => onBlurPassword(e.target.value),
            })}
            onFocus={onFocusPassword}
            value={password}
            name='password'
            className={cx('input', { error: !isPasswordValid }, { placeholderActive: isPasswordPlaceholder })}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder='Пароль'
          />
          <span className={cx('focusedPlaceholder', { placeholderActive: isPasswordPlaceholder })}>Пароль</span>

          <span className={cx('iconSuccess', { iconSuccessActive: check })}>{IconOkey}</span>
          <button className={styles.iconEye} type='button' onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? IconEyeOpen : IconEyeClose}
          </button>

          {errors?.password ? validPassword(password) : validPassword(password)}
        </div>
      </div>

      <button type='submit' disabled={isDisabled} className={styles.nextStepBtn}>
        следующий шаг
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
