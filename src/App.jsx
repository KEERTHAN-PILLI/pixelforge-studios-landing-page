import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AudienceSection from './components/AudienceSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { initAnalytics, trackPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics and Meta Pixel (Placeholders)
    initAnalytics();
    
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-gaming-900 text-slate-200 font-sans selection:bg-gaming-neon selection:text-gaming-900">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AudienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
