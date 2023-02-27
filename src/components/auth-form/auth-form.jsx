import { v4 as uuidv4 } from 'uuid';

import { Link } from 'react-router-dom';

import styles from './auth-form.module.css';

export const AuthForm = ({ step, fields, link, title, addNextStep }) => {
  const handleClick = () => {
    if (step < 3) addNextStep();
  };

  const { inputs, buttonContent } = fields[step - 1];

  return (
    <form className={styles.form}>
      <h4 className={styles.formTitle}>{title}</h4>
      <div className={styles.steps}>
        <span>{step}</span> шаг из <span>3</span>
      </div>
      <div className={styles.fields}>
        {inputs?.map((input) => (
          <div className={styles.field} key={uuidv4()}>
            <input className={styles.input} type={input.type} placeholder={input.placeholder} />
            {input.tip ? <span className={styles.inputTip}>{input.tip}</span> : null}
          </div>
        ))}
      </div>

      <button type='button' className={styles.nextStepBtn} onClick={handleClick}>
        {buttonContent}
      </button>

      {console.log(link)}

      <div className={styles.hasAccount}>
        <span className={styles.sign}>Есть учётная запись?</span>
        <Link to={link.path}>
          <span className={styles.signInLink}>{link.content}</span>
        </Link>
      </div>
    </form>
  );
};
