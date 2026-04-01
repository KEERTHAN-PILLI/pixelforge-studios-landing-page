import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Neon Ascendance",
      category: "AAA Cyberpunk Action RPG",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop",
      desc: "Full co-development handling real-time raytraced environments and complex AI boss behaviors."
    },
    {
      title: "Stella Drift",
      category: "Mobile Arcade Racer",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000&auto=format&fit=crop",
      desc: "End-to-end production. Cross-platform multiplayer implementation and stylized low-poly art."
    },
    {
      title: "Void Vanguard",
      category: "Tactical VR Shooter",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000&auto=format&fit=crop",
      desc: "Pushed the boundaries of VR interaction design and optimized stereoscopic rendering."
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-gaming-900 border-y border-gaming-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-gaming-neon font-bold uppercase tracking-[0.2em] mb-2">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">PORTFOLIO</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden glass-effect"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-900 via-gaming-900/60 to-transparent flex flex-col justify-end p-6">
                <span className="text-gaming-neon text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h4 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
