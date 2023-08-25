"use client";
import SectionHeading from './section-heading'
import{ motion } from "framer-motion"

import { useSectionInView } from '@/lib/hooks';

export default function About() {
  
  const { ref } = useSectionInView('About', 0.75);
  
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 '
    initial={{ opacity:0, y:100 }}
    animate={{ opacity:1, y:0 }}
    transition={{ delay:0.175 }}
    id='about'
    >
        
        <SectionHeading> About me </SectionHeading>

        <p className='text-white mb-3 '>
          🚀 My path is marked by an ongoing passion for exploring 
          the boundaries of software development. Over the years, 
          I've had the privilege to work on various personal projects,
          for clients, and companies, where I've applied my expertise 
          across a wide range of technologies,<span className="font-medium">including JavaScript, 
          React, Node.js, Next.js, and TypeScript.</span>  I believe that every 
          problem presents a unique opportunity to create innovative and 
          valuable solutions.
        
        </p>

        <p className='text-white '>
          🎨 My background in design, embracing creativity and aesthetics,
          adds an extra dimension to my programming approach. Through the 
          fusion of design and programming, I seek to create intuitive, 
          engaging, and functional digital experiences that meet user needs.
        </p>

        <p className='text-white' >
          Currently, I'm focused on deepening my knowledge in
          React, Tailwind CSS, and Next.js, exploring every nuance
          of these technologies to develop robust and efficient
          applications.
        </p>

    </motion.section>
  )
}


//