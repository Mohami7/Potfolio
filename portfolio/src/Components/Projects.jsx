import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Importing icons from react-icons

export default function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-col lg:flex-row lg:justify-center bg-neutral-800 p-4 rounded-lg shadow-md'>
            {/* Image takes 50% of the card on large screens */}
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/2'>
              <img src={project.image} className='mb-6 rounded w-full h-auto object-cover' alt={project.title} />
            </motion.div>

            {/* Content takes 50% of the card on large screens */}
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl ml-4 lg:w-1/2'>
              <h6 className='mb-2  font-semibold text-left'>{project.title}</h6>
              <p className='mb-4 text-neutral-400 text-left'>{project.description}</p>
              {/* Technologies */}
              <div className='flex flex-wrap mb-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='mr-4 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons Section placed below the description */}
              <div className='flex space-x-4 mt-4'>
                <button className='flex items-center rounded bg-purple-800 px-4 py-2 text-white hover:bg-purple-700'>
                  <FiExternalLink className='mr-2' /> {/* Live link icon */}
                  Live
                </button>
                <button className='flex items-center rounded bg-neutral-700 px-4 py-2 text-white hover:bg-neutral-600'>
                  <FiGithub className='mr-2' /> {/* GitHub icon */}
                  GitHub
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
