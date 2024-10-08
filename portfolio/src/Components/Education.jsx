import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className='mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-center  p-6 rounded-lg shadow-md'>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4 mb-6 lg:mb-0'>
              <img className='rounded-full w-20 h-20 mx-auto lg:mx-0 bg-white' src={education.img} alt="Education Logo" />
              <p className='mt-4 text-center lg:text-left text-sm text-neutral-400'>{education.year}</p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full lg:w-3/4'>
              <h6 className='mb-2 font-semibold text-left text-2xl'>{education.role} - <span className='text-sm text-purple-300'>{education.company}</span></h6>
              <p className='mb-4 text-neutral-400 text-left'>{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
