import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { FORM_FIELDS as formFields } from 'constants';

import { AuthForm } from 'components';
import styles from './auth-page.module.css';

export const AuthPage = () => {
  const [stepCounter, setStepCounter] = useState(1);

  const addNextStep = () => {
    setStepCounter((step) => step + 1);
  };

  const { authPath } = useParams();

  return (
    <div className={styles.canvas}>
      <h3 className={styles.title}>Cleverland</h3>
      <AuthForm {...formFields[authPath]} addNextStep={addNextStep} step={stepCounter} />
    </div>
  );
};
