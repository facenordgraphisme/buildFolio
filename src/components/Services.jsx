"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {services} from '../data'
import { useAnimate, stagger } from "framer-motion"

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
        <div className="container mx-auto">
            <motion.div 
            initial={{ y: 200, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center">
                <p className='uppercase tracking-[15px] text-gray-600 py-4'>Prestations</p>
                <h2 className='section-title'>Ce que je fais</h2>
                <p className='subtitle'>Je vous accompagne au développement de votre activité sur Internet en fonction de vos besoins et en respectant l{"'"}identité de votre entreprise.</p>
            </motion.div>
            <motion.div
            initial={{ y: 200, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5, delay:0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 gap-8">
                {services.map((service, index) => {
                    const {icon, name, description} = service;
                    return <div className='bg-secondary p-6 rounded-2xl shadow-xl shadow-gray-300 hover:scale-105 transition-all duration-500' key={index}>
                        <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                            {icon}
                        </div>
                        <h4 className='mb-2 text-xl'>{name}</h4>
                        <p className='text-base font-medium'>{description}</p>
                    </div>
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default Services