'use client'
import { motion } from 'framer-motion'

import React from 'react'

const Processus = () => {
  return (
    <section className='section bg-tertiary'>
        <div className='container mx-auto'>
            <motion.div 
            initial={{ y: 200, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center text-center">
                    <p className='uppercase tracking-[15px] text-gray-600 py-4'>Face nord graphisme</p>
                    <h2 className='section-title'>POURQUOI CRÉER UN SITE WEB?</h2>
                    <p className='subtitle'>85% des Francais (source INSEE) effectuent une recherche sur internet lorsqu{"'"}ils ont besoin d{"'"}un bien ou d{"'"}un service.
Votre présence en ligne est donc indispensable pour développer votre activité.</p>
                </motion.div>
                <div className='flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
                    <motion.div
                    initial={{ y: 200, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1}}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className='text-center'>
                        <div className='relative bg-white inline-block px-6 py-3 rounded-lg border border-accent '>
                            <p className='text-3xl text-accent'>1</p>
                        </div>
                        <h4 className='text-xl font-semibold py-4'>Rendre votre entreprise visible</h4>
                        <p className='text-sm font-medium'>Soyez présent là où on vous recherche. Présentez votre activité et valorisez l{"'"}image de votre marque grace à un site web unique au design attractif et professionnel.</p>
                    </motion.div>
                    <motion.div
                    initial={{ y: 200, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1}}
                    transition={{ duration: 1.5, delay:0.5 }}
                    viewport={{ once: true }}
                    className='text-center'>
                        <div className='relative bg-accent inline-block px-6 py-3 rounded-lg'>
                            <p className='text-3xl text-white'>2</p>
                        </div>
                        <h4 className='text-xl font-semibold py-4'>Attirer de nouveaux clients et les fidéliser</h4>
                        <p className='text-sm font-medium'>Avoir un site internet permet aux visiteurs de connaitre vos services, vos produits, comparer les offres, consulter les avis utilisateurs. Une stratégie de référencement bien établie permet d{"'"}attirer de nouveaux clients.</p>
                    </motion.div>
                    <motion.div
                    initial={{ y: 200, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1}}
                    transition={{ duration: 1.5, delay:1 }}
                    viewport={{ once: true }}
                    className='text-center'>
                        <div className='relative bg-white  inline-block px-6 py-3 rounded-lg border border-accent'>
                            <p className='text-3xl text-accent'>3</p>
                        </div>
                        <h4 className='text-xl font-semibold py-4'>Crédibilité et professionnalisme</h4>
                        <p className='text-sm font-medium'>Faites bonne impression dès les premières secondes. créer un site qui respecte l{"'"}identité de votre marque avec une experience utilisateur agréable rendra l{"'"}image de votre entreprise fiable et sérieuse</p>
                    </motion.div>
                </div>
        </div>
    </section>
  )
}

export default Processus