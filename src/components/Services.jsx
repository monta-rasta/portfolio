
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Sparkles } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code2,
      title: 'Software & Web Development',
      description: 'Custom web applications, responsive websites, and enterprise software solutions built with modern technologies. From concept to deployment, I deliver scalable and maintainable code.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['React & Modern Frameworks', 'Full-Stack Development', 'API Integration', 'Cloud Deployment'],
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights with advanced analytics, visualization, and reporting. Leveraging cutting-edge tools to drive data-driven decision making.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Business Intelligence'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-2xl group-hover:shadow-blue-500/20">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
