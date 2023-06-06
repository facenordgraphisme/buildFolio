"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Projects from './Projects'


const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1440px]'>
      <div className="container mx-auto">
        <motion.div 
        initial={{ y: 200, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center">
        <p className='uppercase tracking-[15px] text-gray-600 py-4'>Portfolio</p>
          <h2 className='section-title'>Mes derniers projets</h2>
          <p className='subtitle'>Voici certains des projets sur lesquels j{"'"}ai aimé travailler et qui pourront vous offrir un aperçu de mes compétences.</p>
        </motion.div>
        <Projects/>
      </div>
    </section>
  )
} 

export default Portfolio