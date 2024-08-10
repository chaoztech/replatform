import React from 'react';

import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Features from './Features/Features';
import Footer from './Footer/Footer';

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className='landing-page'>    
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  )
}

export default LandingPage;