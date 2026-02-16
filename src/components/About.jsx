
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Users, Terminal, Cpu } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Deployed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-10 opacity-10 pointer-events-none">
         <Code size={120} className="text-white rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10 pointer-events-none">
         <Cpu size={120} className="text-white -rotate-12" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Asymmetrical Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Background Accent Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00D9FF] to-[#B026FF] rounded-lg opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main Image with White Background */}
            <div className="relative z-10 bg-white p-2 rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="https://horizons-cdn.hostinger.com/6fd89a8e-5eac-4cce-a3eb-21812ab424e9/32bb9eeaced0f6007e388a6e672ecb89.jpg"
                alt="IT Professional"
                className="w-full h-auto rounded-lg shadow-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Code Card - Now Visible on Mobile */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 right-4 sm:-right-10 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-4 sm:p-6 rounded-xl shadow-2xl max-w-[200px] sm:max-w-xs z-20"
              >
                <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                  <Terminal size={14} className="text-cyan-400 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs text-slate-400 font-mono">dev_profile.json</span>
                </div>
                <div className="space-y-1 font-mono text-[10px] sm:text-xs">
                  <div className="text-slate-300"><span className="text-purple-400">const</span> <span className="text-yellow-400">dev</span> = {'{'}</div>
                  <div className="pl-2 sm:pl-4 text-slate-300">status: <span className="text-green-400">'Ready'</span>,</div>
                  <div className="pl-2 sm:pl-4 text-slate-300">skills: [<span className="text-orange-400">'web'</span>, <span className="text-orange-400">'data'</span>]</div>
                  <div className="text-slate-300">{'}'};</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-cyan-500"></span>
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engineering the <br />
                <span className="bg-gradient-to-r from-[#00D9FF] to-[#B026FF] bg-clip-text text-transparent">
                  Impossible
                </span>
              </h2>
            </div>

            <div className="prose prose-invert prose-lg text-slate-300">
              <p>
                I don't just write code; I architect digital experiences. With a background deep-rooted in complex system design and data analytics, I bridge the gap between creative vision and technical execution.
              </p>
              <p>
                My approach is unconventional. I treat every project as a unique algorithmic challenge, optimizing for both performance and user impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-center sm:block">
                    <stat.icon className="w-6 h-6 mb-0 sm:mb-3 mr-3 sm:mr-0 text-[#00D9FF]" />
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-mono uppercase">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
