import { MAIL_SENT_FB, NEW_PASSWORD_FB } from 'constants';

import { useSelector } from 'react-redux';
import { EmailForm, FeedbackModal, NewPasswordForm } from 'components/forgot-password-forms';

export const ForgotPasswordPage = () => {
  const isSent = useSelector((state) => state.forgotPassword.forgotPasswordStatus);
  const isSaved = useSelector((state) => state.forgotPassword.resetPasswordStatus) === 200;

  const url = window.location.hash;

  const mailSent = isSent && <FeedbackModal {...MAIL_SENT_FB} />;
  const dataSaved = isSaved && <FeedbackModal {...NEW_PASSWORD_FB} />;

  const emailForm = !url.includes('forgot-pass?code') && <EmailForm />;
  const newPasswordForm = url.includes('forgot-pass?code') && <NewPasswordForm />;

  return mailSent || dataSaved || emailForm || newPasswordForm;
};
