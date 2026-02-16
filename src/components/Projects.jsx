
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing business metrics with real-time data updates and custom reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['Power BI', 'Metabase', 'Python', 'Excel'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Health Care Center',
      description: 'A Laravel full-stack platform for a medical center that offers several different medical services.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907',
      tags: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Valofact',
      description: 'A web app dedicated to arranging and organizing deals between trash sellers and recyclers. The process is mainly inspired by the Auction principle with modern and precise features to guarantee safety and security.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-orange-500 to-red-500',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and successful client projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
