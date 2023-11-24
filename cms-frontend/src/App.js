import { useState } from 'react';
import { ErrorModal}  from './pages/errorPage/errorModal';
import { AppRouter } from './router/router'

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
      <AppRouter handleOpenErrorModal={handleOpenErrorModal}/>
      
      <ErrorModal
        open={!!error}
        onClose={handleCloseErrorModal}
        errorMessage={error}
      />
    </div>
  );
}
