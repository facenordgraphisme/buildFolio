"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ImageAbout from '../assets/img/about.jpg'
import Image from 'next/image'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id='about' className='section bg-tertiary'>
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row gap-24'>
                <Image className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={ImageAbout} alt='about'/>
                <div className="flex flex-col items-center text-center lg:item-start lg:text-left">
                    <div className="flex flex-col">
                    <motion.div
                    initial={{ y: 200, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1}}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    >
                    <p className='uppercase tracking-[15px] text-gray-600 py-4'>A Propos</p>
                        <h2 className='mb-3'>Francois Xavier Pin</h2>
                        <h2 className='mb-4 text-2xl font-bold text-accent'>Webdesigner Freelance</h2>
                        <hr className='mb-8 opacity-50 text-black'/>
                    </motion.div>
                        <motion.p 
                        initial={{ x: 400, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className='mb-8 text-gray-600 text-base font-medium'>
                            Passioné d{"'"}informatique depuis mon plus jeune âge, j{"'"}ai toujours été intéressé par les nouvelles technologies. Mon premier site web remonte à mes 15 ans, avec mes premiers pas dans le balisage. Après une dizaine d{"'"}années à effectuer un travail saisonnier à la montagne, j{"'"}ai décidé de faire d{"'"}une de mes passion mon métier. Je suis installé à Embrun dans les Hautes-Alpes, entre Gap et Briançon <br /> <br />
                            Formé tout d{"'"}abord sur la suite Adobe ainsi que la création de sites Wordpress, j{"'"}ai par la suite appris les différents languages de développement front-end afin de pouvoir créer sans aucune limite des sites au design uniques. 
                        </motion.p>
                    </div>
                    <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'><button className='py-4 px-12 text-white font-medium hover:scale-105 transition-all duration-300'>Contact</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About