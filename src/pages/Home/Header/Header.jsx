import React from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import HeroSection from './HeroSection/HeroSection';

const Header = () => {
  return (
    <header>
        <NavigationBar />
        <HeroSection />
    </header>
  )
}

export default Header