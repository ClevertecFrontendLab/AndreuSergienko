import { useSelector } from 'react-redux';

import './preloader.css';

export const Preloader = ({ children }) => {
  const isLoading = useSelector((state) => state.preloader.isLoading);

  if (isLoading) {
    return (
      <div className='spinnerWrapper' data-test-id='loader'>
        <div className='spinner'>{children}</div>
      </div>
    );
  }

  return null;
};
