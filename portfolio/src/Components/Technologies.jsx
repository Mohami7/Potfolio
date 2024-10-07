import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiReactjsLine } from 'react-icons/ri';
import { FaLaravel } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { motion} from 'framer-motion'



const iconVariants =(duration)=>({
   initial:{y:-10},
   animate:{
      y:[10,-10],
      transition:{
         duration:duration,
         ease:'linear',
         repeat:Infinity,
         repeatType:"reverse"
      },
   },
})


export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 whileInView={{opacity:1 ,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-7xl text-[#E34F26]' />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3Alt className='text-7xl text-[#1572B6]' /> 
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJsSquare className='text-7xl text-[#F7DF1E]' />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-[#61DAFB]' />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoRedux className='text-7xl text-[#764ABC]' />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-[#339933]' /> 
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-white' /> 
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className='text-7xl text-[#06B6D4]' /> 
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiBootstrap className='text-7xl text-[#7952B3]' /> 
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-7xl text-[#4479A1]' /> 
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiGit className='text-7xl text-[#F05032]' /> 
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJira className='text-7xl text-[#0052CC]' /> 
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiDocker className='text-7xl text-[#2496ED]' /> 
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className='text-7xl text-[#181717]' /> 
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPhp className='text-7xl text-[#777BB4]' /> 
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaLaravel className='text-7xl text-[#FF2D20]' /> 
        </motion.div>
      </motion.div>
    </div>
  )
}
