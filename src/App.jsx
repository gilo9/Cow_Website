import React, { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import SportsBanner from './components/SportsBanner';
import LocationFooter from './components/LocationFooter';
import MenuRoute from './components/MenuRoute';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToLocation = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('location');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('location');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSports = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('sports');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('sports');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root-container">
      {/* Sticky Header Navigation */}
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        scrollToLocation={scrollToLocation}
      />

      {/* Main Page Routing */}
      <main className="main-content-flow">
        {currentPage === 'home' ? (
          <div className="home-view-flow">
            {/* Hero Section Banner */}
            <HeroSection 
              setCurrentPage={setCurrentPage} 
              scrollToLocation={scrollToLocation}
              scrollToSports={scrollToSports}
            />

            {/* Features Grid ("The Big Three") */}
            <FeaturesGrid 
              setCurrentPage={setCurrentPage}
              scrollToSports={scrollToSports}
            />

            {/* Live Sports Matches fixtures */}
            <div id="sports">
              <SportsBanner />
            </div>

            {/* Location Logistical Details */}
            <div id="location">
              <LocationFooter />
            </div>
          </div>
        ) : (
          /* Menu & Pricing View */
          <MenuRoute />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        scrollToLocation={scrollToLocation}
      />

      {/* Inline specific App styles */}
      <style>{`
        .app-root-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-dark);
        }

        .main-content-flow {
          flex-grow: 1;
        }

        .home-view-flow {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
