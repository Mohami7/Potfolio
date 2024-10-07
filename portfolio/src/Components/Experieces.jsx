import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion} from 'framer-motion'
import img from '../assets/sante.png'


export default function Experieces() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20  text-center text-4xl'>Experiece</motion.h2>
         <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='mb-8  flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <img className='rounded-full w-20 mb-4 bg-white' src={img} alt="" />
                    <p className='mb-2 text-sm text-neutral-400 text-left '>{experience.year}</p>
                    </motion.div>
                      <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                         <h6 className='mb-2 font-semibold text-left text-2xl'> {experience.role} - <span className='text-sm text-purple-100 '>{experience.company}</span></h6>
                         <ul className='mb-4 text-neutral-400 text-left list-disc'>{experience.description.map((exp,index)=>(
                                 <li whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} key={index} className='mb-4 mt-4'>{exp}</li>
                         ))}</ul>
                      </motion.div>
                </div>
            ))}
         </div>
    </div>
  )
}
