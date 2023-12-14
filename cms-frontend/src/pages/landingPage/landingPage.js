import * as React from 'react';
import Footer from '../../components/Footer';
import './landingPage.css';
import Navbar from '../../components/NavBar';
import LoginBox from '../../components/LoginModal';

export const LandingPage = () => {
  return (
    <div className="LandingPage">
     <Navbar/>
     <LoginBox/>
      {/* <Header /> */}
      {/* Search Bar */}
        {/* <Stats /> */}
        {/* <Search /> */}
      
      <Footer />

    </div>
  );
}