"use client"
import React from 'react'
import HeroImg from '../assets/img/banner-woman2.webp'
import img from '../assets/img/skillz.png'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillFilePersonFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "UX Design",
      "Création de site web",
      "Infographies",
      "Référencement",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <section id='home' 
    className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className="container mx-auto h-full">
          <div className='flex items-center h-full pt-8'>
            {/* left */}
            <motion.div 
            initial={{ y: 0, opacity: 0, scale: 1.3 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center lg:items-start">
              <div className='text-center'>
                  <h1 className='text-gray-700'>Face Nord <span className='text-[#5651e5]'>Graphisme</span></h1>
                  <p className='py-4 uppercase tracking-[10px] text-gray-900 text-base lg:text-xl'>Propulsez votre entreprise au sommet</p>
                  <h1 className="text-xl md:text-4xl font-semibold px-10 py-4">
              <span className="mr-3 text-accent">{text}</span>
              <Cursor cursorColor="#5651e5" />
            </h1>
                  <p className='py-4 text-black max-w-[70%] m-auto text-sm sm:text-xl font-medium'>Prenez de la hauteur, en créant un site web au design attractif et professionnel. Valorisez l{"'"}image de votre entreprise et attirez de nouveaux clients en offrant à vos utilisateurs une experience unique.</p>
                  <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                  <Link to='portfolio' activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'><button className='py-4 px-12 text-white font-medium hover:scale-105 transition-all duration-300 opacity-95 hover:opacity-100 '>Portfolio</button></Link>
                      
                  </div>
              </div>
            </motion.div>
            {/* right */}
            <motion.div 
            initial={{ y: 0, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='hidden lg:flex flex-1 justify-center items-center h-full'>
              <Image src={img} alt='' className=''/>
            </motion.div>
            <div className="absolute xs:bottom-10 bottom-32 left-[50%] -translate-x-[50%]  lg:flex hidden justify-center items-center overflow-hidden cursor-pointer">
            <Link to='services' activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
              <motion.div
                animate={{y: [0, 24, 0]}}
                transition={{
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-black mb-1"/>

              </div>
            </Link>
      </div>
          </div>
        </div>
    </section>
  )
}

export default Hero