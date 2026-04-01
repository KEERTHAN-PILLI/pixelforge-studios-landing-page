import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Video, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Cpu className="w-10 h-10 text-gaming-neon" />,
      title: "Game Development",
      desc: "Full-cycle game production across PC, Console, and Mobile. We handle engine programming (Unreal/Unity), core mechanics, and multiplayer architecture."
    },
    {
      icon: <Video className="w-10 h-10 text-gaming-neon" />,
      title: "2D/3D Animation",
      desc: "Lifelike character rigging, fluid motion capture cleanup, and explosive VFX. We breathe life into characters and environments."
    },
    {
      icon: <Palette className="w-10 h-10 text-gaming-neon" />,
      title: "UI/UX & Asset Design",
      desc: "Stunning HUDs, immersive menus, and hyper-detailed 3D props. We craft visual identities that captivate players instantly."
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-gaming-800/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-gaming-neon font-bold uppercase tracking-[0.2em] mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">SERVICES PIPELINE</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl hover:border-gaming-neon/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-gaming-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
