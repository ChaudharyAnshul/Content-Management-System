import { useState } from 'react';
import { LoginIn } from './loginPage/login';
import {ErrorModal} from './error/errorModal'

export const App = () => {

  const [error, setError] = useState(null);

  const handleOpenErrorModal = (errorMessage) => {
    setError(errorMessage);
  };

  const handleCloseErrorModal = () => {
    setError(null);
  };

  return (
    <div className="App">
      <LoginIn handleOpenErrorModal={handleOpenErrorModal} />
      
      <ErrorModal
        open={!!error}
        onClose={handleCloseErrorModal}
        errorMessage={error}
      />
    </div>
  );
}
