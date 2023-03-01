/* eslint-disable consistent-return */
import { useState } from 'react';

import { SignUpFormFirst } from './sign-up-1';
import { SignUpFormSecond } from './sign-up-2';
import { SignUpFormFinal } from './sign-up-3';

export const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const changeStep = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  if (step === 1) {
    return <SignUpFormFirst changeStep={changeStep} />;
  }
  if (step === 2) {
    return <SignUpFormSecond changeStep={changeStep} />;
  }
  if (step === 3) {
    return <SignUpFormFinal changeStep={changeStep} />;
  }
};
