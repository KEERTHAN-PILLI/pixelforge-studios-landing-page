import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', to: 'services' },
    { name: 'Audience', to: 'audience' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  const handleQuoteClick = () => {
    trackCTAClick('Navbar_GetQuote');
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Gamepad2 className="w-8 h-8 text-gaming-neon" />
            <span className="font-display font-bold text-2xl text-white tracking-wider">
              PIXEL<span className="text-gradient">FORGE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-slate-300 hover:text-gaming-neon transition-colors cursor-pointer text-sm font-medium uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleQuoteClick}
              className="bg-gradient-to-r from-gaming-neon to-gaming-neonPurple text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform neon-glow"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect absolute w-full top-full left-0 border-t border-gaming-700/50">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-gaming-neon block px-3 py-4 text-base font-medium uppercase tracking-widest border-b border-gaming-800"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleQuoteClick}
              className="mt-6 w-full bg-gradient-to-r from-gaming-neon to-gaming-neonPurple text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
