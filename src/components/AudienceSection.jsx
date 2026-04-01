import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Gamepad, ShoppingCart } from 'lucide-react';

const AudienceSection = () => {
  const tiers = [
    {
      icon: <Briefcase className="w-12 h-12 text-gaming-neon" />,
      title: "B2B (Game Studios)",
      subtitle: "Enterprise Partnerships",
      features: [
        "Full-scale Co-development",
        "Outsource 3D/2D Assets",
        "Staff Augmentation",
        "Engine Arch Optimization"
      ],
      color: "border-gaming-neon"
    },
    {
      icon: <Gamepad className="w-12 h-12 text-gaming-neonPurple" />,
      title: "B2C (Gamers)",
      subtitle: "Our Community",
      features: [
        "Early Access Alpha tests",
        "In-Game Esports Tournaments",
        "Exclusive Player Skins",
        "Community Driven Lore"
      ],
      color: "border-gaming-neonPurple"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-gaming-accent" />,
      title: "D2C (Direct Buyers)",
      subtitle: "Asset & Tool Store",
      features: [
        "Pre-rigged 3D Character Models",
        "Royalty Free Sound Packs",
        "Unreal/Unity Blueprint Plugins",
        "Direct Indie Support Plans"
      ],
      color: "border-gaming-accent"
    }
  ];

  return (
    <section id="audience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-900 via-gaming-800 to-gaming-900 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm text-gaming-neonPurple font-bold uppercase tracking-[0.2em] mb-2">Who We Serve</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">TAILORED SOLUTIONS</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border-t-4 ${tier.color} text-left flex flex-col h-full`}
            >
              <div className="mb-6">{tier.icon}</div>
              <h4 className="text-2xl font-black font-display mb-1">{tier.title}</h4>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-6">{tier.subtitle}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
