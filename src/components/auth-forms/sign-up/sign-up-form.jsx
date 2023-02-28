/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { SIGN_UP_FORM as signUpForm } from '../../../constants';

import styles from './sign-up-form.module.css';

export const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const handleClick = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const { fields, link } = signUpForm;

  const { inputs, button } = fields[step - 1];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.formTitle}>Регистрация</h4>
      <div className={styles.steps}>
        <span>{step}</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        {inputs?.map((input) => (
          <div className={styles.field} key={uuidv4()}>
            <input
              {...register(input.name, {
                required: true,
              })}
              className={styles.input}
              type={input.type}
              placeholder={input.placeholder}
            />
            {/* {errors?.[input.name] ? (
              <span className={styles.inputTip}>{input.errorTip}</span>
            ) : input.tip ? (
              <span className={styles.inputTip}>{input.tip}</span>
            ) : null} */}

            {errors?.[input.name] ? (
              <span className={styles.inputTip}>{input.errorTip ?? input.tip}</span>
            ) : (
              <span className={styles.inputTip}>{input.tip}</span>
            )}
          </div>
        ))}
      </div>

      <button type={button.type ?? 'button'} className={styles.nextStepBtn} onClick={handleClick}>
        {button.content}
      </button>

      <div className={styles.hasAccount}>
        <span className={styles.sign}>Есть учётная запись?</span>
        <Link to={link.path}>
          <span className={styles.signInLink}>{link.content}</span>
        </Link>
      </div>
    </form>
  );
};
