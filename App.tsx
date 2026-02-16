import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhatIs from './components/WhatIs';
import HowItWorks from './components/HowItWorks';
import Workflow from './components/Workflow';
import WhoItHelps from './components/WhoItHelps';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 font-sans flex flex-col justify-between">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Stats />
            <WhatIs />
            <HowItWorks />
            <Workflow />
            <WhoItHelps />
            <CallToAction />
          </>
        )}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;