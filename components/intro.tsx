"use client";
import Image from 'next/image'
import React from 'react'
import{ motion } from "framer-motion"
import  Link  from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center' >
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity :1 ,scale:1 }}
                transition = {{ type: "tween", duration: 0.2,}}
                >
                    <Image src="/profile.png"  
                    alt='William Folle Portrait' 
                    width="192"
                    height="192"
                    quality="100"
                    priority={true}
                    className='h-30 w-30 rounded-full object-cover border-[0.15rem] shadow-xl '
                    />
                </motion.div>
                <motion.span className=" absolute bottom-0 right-5 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity :1 ,scale:1 }}
                transition = {{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7,}}
                >
                    👾
                </motion.span>
            </div>
        </div>
        
        <motion.p className="mb-10 mt-4 px-4  text-2xl font-medium 
        !leading-[1.8] sm:text-4xl text-white text-shadow-lg"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
        >
            <span className="font-bold">Hello, I'm William.</span> I'm a{" "}
            <span className="font-bold">Front End developer</span> with{" "}
            <span className="font-bold">4 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
         </motion.p>

         <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
         initial={{ opacity: 0, y: 100}}
         animate={{ opacity: 1, y: 0 }}
         >
            
            <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full'>
                Contact me here <BsArrowRight/>{" "}
            </Link>

            <a className=' bg-white  px-7 py-3 flex items-center gap-2 rounded-full '>
                Download CV <HiDownload/>
            </a>

            <a className=' bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full '>
             <BsLinkedin/>
            </a>

            <a className=' bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] '>
                <FaGithubSquare/>
            </a>
         </motion.div>

    </section>
  )
}
