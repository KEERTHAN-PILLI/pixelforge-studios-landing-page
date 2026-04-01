import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crosshair } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with abstract glowing orb */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-neon/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaming-neonPurple/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gaming-neon/30 bg-gaming-neon/10 text-gaming-neon font-medium text-sm mb-6 uppercase tracking-widest">
            <Crosshair className="w-4 h-4" />
            <span>Next-Gen Studios</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6">
            FORGE <br/>
            <span className="text-gradient">YOUR REALITY</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
            We build immersive worlds, stunning assets, and unparalleled experiences for gamers and creators worldwide. Your vision, leveled up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* [EVENT TRACKING] Logs Hero CTA click to GA4 and Meta Pixel */}
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              onClick={() => trackCTAClick('Hero_StartProject')}
              className="bg-white text-gaming-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="portfolio" 
              smooth={true} 
              duration={500}
              onClick={() => trackCTAClick('Hero_ViewWork')}
              className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm border border-slate-700 hover:border-gaming-neon transition-colors flex items-center justify-center cursor-pointer"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass-effect p-2 neon-glow">
            {/* Generic futuristic gaming placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
              alt="High-end gaming setup and game development" 
              className="w-full h-full object-cover rounded-xl opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-900 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '3s'}}>
            <p className="text-3xl font-black text-white">150+</p>
            <p className="text-sm text-gaming-neon uppercase tracking-wider font-bold">Games Shipped</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
