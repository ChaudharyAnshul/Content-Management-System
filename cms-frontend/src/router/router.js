import React, { useState } from 'react';

export const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
          </Route>
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/dashboard">
            {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  };