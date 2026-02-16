import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Zap, Cpu, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const floatingIcons = [
    { Icon: Code2, color: 'text-[#00D9FF]', delay: 0, x: -150, y: -100 },
    { Icon: Database, color: 'text-[#B026FF]', delay: 1, x: 180, y: -80 },
    { Icon: Zap, color: 'text-yellow-400', delay: 2, x: -120, y: 120 },
    { Icon: Cpu, color: 'text-cyan-400', delay: 1.5, x: 150, y: 100 },
    { Icon: Terminal, color: 'text-green-400', delay: 0.5, x: 0, y: -180 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1699060463533-94ceb428c67f)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/0 to-slate-950/0 z-0" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      {/* Floating Particles/Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {floatingIcons.map(({ Icon, color, delay, x, y }, index) => (
          <motion.div
            key={index}
            className={`absolute left-1/2 top-1/2 ${color} opacity-20`}
            initial={{ x, y, scale: 0 }}
            animate={{ 
              y: [y - 10, y + 10, y - 10],
              scale: 1,
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.5, delay }
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-300 text-sm font-medium tracking-wide">Available for Freelance</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 relative"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="block">Architecting</span>
              <span className="block bg-gradient-to-r from-[#00D9FF] via-white to-[#B026FF] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                Digital Future
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Merging clean code with cutting-edge design. I build high-performance 
            web applications and data solutions that scale.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-[#00D9FF] hover:bg-cyan-400 text-slate-900 font-bold px-8 py-6 text-lg group relative overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
            >
              <span className="relative z-10 flex items-center">
                Start Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              variant="outline"
              className="bg-transparent border-[#B026FF] text-[#B026FF] hover:bg-[#B026FF]/10 hover:text-white px-8 py-6 text-lg backdrop-blur-sm transition-all hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]"
            >
              View Portfolio
            </Button>
          </motion.div>

          {/* Bottom Tech Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { label: 'Software Development', color: 'text-cyan-400' },
              { label: 'Web Development', color: 'text-blue-400' },
              { label: 'Data Analysis', color: 'text-green-400' },
              { label: 'Data Visualisations', color: 'text-purple-400' }
            ].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-default">
                <div className={`w-2 h-2 rounded-full bg-current ${tech.color} group-hover:animate-ping`} />
                <span className="text-slate-400 font-mono text-sm tracking-wider uppercase group-hover:text-white transition-colors">
                  {tech.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;