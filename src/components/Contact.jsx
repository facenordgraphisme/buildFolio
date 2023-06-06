"use client"
import React from 'react'
import { useRef } from "react";
import {contact} from '../data' 
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import emailConfig from '../../config/emailConfig';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      const formMess = document.querySelector(".form-message");
  
      emailjs
        .sendForm(
          /*CLEFS PUBLIC A CACHER,REVOIR COURS (FICHIER .env)*/
          emailConfig.serviceID,
          emailConfig.templateID,
          form.current,
          emailConfig.publicKey,
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
  
            setTimeout(() => {}, 2500);
          },
  
          (error) => {
            console.log(error.text);
            setTimeout(() => {}, 2500);
          }
        );
    };

  return (
    <section className='section bg-primary' id='contact'>
        <div className="container mx-auto">
            <motion.div
            initial={{ y: 200, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center">
                <p className='uppercase tracking-[15px] text-gray-600 py-4'>Contact</p>
                <h2 className='section-title'>Discutons de votre projet</h2>
                <p className='subtitle'>Utilisez ce formulaire pour me préciser votre objectif et trouvons ensemble une solution adaptée à vos besoins.
                Le premier devis est gratuit.
             </p>
            </motion.div>

            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <motion.div
                initial={{ x: -200, opacity: 0}}
                whileInView={{ x: 0, opacity: 1}}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-1 flex-col item-start space-y-8 mb-12 lg:mb-0 lg:pt2">
                    {contact.map((item, index)=> {
                        const {icon, title, subtitle, description} = item;
                        return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                            <div className='text-accent rounded-sm w-14 h-14 items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>{icon}
                            </div>
                            <div>
                                <div>
                                    <h4 className='text-xl mb-1'>{title}</h4>
                                    <p className='mb-1 text-lg'>{subtitle}</p>
                                    <p className='text-accent text-lg'>{description}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </motion.div>

                <motion.form 
                initial={{ x: 200, opacity: 0}}
                whileInView={{ x: 0, opacity: 1}}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                ref={form}
                onSubmit={sendEmail}
                className='space-y-8 w-full max-w-[780px]'>
                    <div className='flex gap-8'>
                        <input className='input shadow-xl shadow-gray-300' type="text" placeholder='Votre nom' name="name" />
                        <input className='input shadow-xl shadow-gray-300' type="email" placeholder='Votre mail' name="email" />
                    </div>
                    <input className='input shadow-xl shadow-gray-300' type="text" placeholder='Sujet' name="subject" />
                    <textarea className='textarea shadow-xl shadow-gray-300' placeholder='Votre message' name="message"></textarea>
                    <button  className='py-4 px-12 text-white font-medium hover:scale-105 transition-all duration-300 opacity-95 hover:opacity-100 '>Envoyer</button>
                </motion.form>
            </div>
        </div>
    </section>
  )
}

export default Contact