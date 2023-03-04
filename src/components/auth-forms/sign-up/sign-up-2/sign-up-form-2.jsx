import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFormDataAC } from 'store';

import styles from '../sign-up-form.module.css';

export const SignUpFormSecond = ({ changeStep }) => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const [isDisabled, setIsDisabled] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const checkIsFieldsValid = (data) => {
    if (!isDisabled && firstName && lastName) {
      dispatch(setFormDataAC(data));
      changeStep();
    } else {
      setIsDisabled(true);
    }
  };

  const onSubmit = (data) => {
    checkIsFieldsValid(data);
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
              onBlur: (e) => setFirstName(e.target.value),
            })}
            name='firstName'
            className={styles.input}
            type='text'
            placeholder='Имя'
          />
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
              onBlur: (e) => setLastName(e.target.value),
            })}
            name='lastName'
            className={styles.input}
            type='text'
            placeholder='Фамилия'
          />

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
