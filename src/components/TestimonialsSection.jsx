import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Lead Producer, NovaCore Games",
      review: "PixelForge delivered our VR assets 3 weeks ahead of schedule. The topology was insanely clean, optimizing our entire rendering pipeline.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Indie Dev, 'Neon Drifter'",
      review: "Their D2C asset store is a life saver. I purchased the sci-fi character rigs and was able to implement them into Unity in literally 10 minutes.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Director, Apex Esports",
      review: "Working with them on our tournament broadcast graphics was incredible. Best UI/UX team in the gaming sector, hands down.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gaming-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-gaming-accent font-bold uppercase tracking-[0.2em] mb-2">Player Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">TESTIMONIALS</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl relative"
            >
              <div className="flex text-gaming-accent mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="mt-auto">
                <p className="text-white font-bold font-display">{testimonial.name}</p>
                <p className="text-xs text-gaming-neon uppercase tracking-wider font-medium mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
