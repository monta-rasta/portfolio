import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Reduced to exactly 3 top testimonials
  const testimonials = [
    {
      name: 'Donia Kssouri',
      role: 'Sales Manager',
      content: 'Working with Montassar was an absolute pleasure. He delivered our project ahead of schedule and exceeded all expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      tag: 'Enterprise'
    },
    {
      name: 'Med Iheb Bellaaj',
      role: 'Project Manager',
      content: 'Exceptional data analysis skills! The insights provided transformed our business strategy.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      tag: 'Analytics'
    },
    {
      name: 'Fadwa Fakhfakh',
      role: 'Dentist',
      content: 'Incredible technical expertise combined with great communication skills. He understood our vision perfectly and brought it to life with clean, efficient code.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      tag: 'Startup'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Mesh Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', 
        backgroundSize: '40px 40px' 
      }}></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <MessageSquare size={14} className="text-cyan-400" />
            <span className="text-xs text-slate-300 font-mono uppercase">Client Feedback</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Innovators</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
              
              <div className="relative h-full bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                     <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20 rounded-full"></div>
                     <Quote className="w-8 h-8 text-cyan-400 relative z-10" />
                  </div>
                  <span className="px-2 py-1 bg-slate-700/50 rounded text-xs font-mono text-cyan-300 border border-slate-600">
                    {testimonial.tag}
                  </span>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed italic flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-slate-700/50 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;