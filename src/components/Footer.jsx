import React from 'react'

import {social} from '../data'
import Logo from '../assets/img/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div className="flex space-x-6 items-center justify-center">
                    {social.map((item, index) => {
                        const {href, icon} = item
                        return <Link className='text-accent text-2xl hover:-translate-y-1 transition-all duration-300' href={href} key={index}>{icon}</Link>
                    })}
                </div>
                <div>
                    <Image src={Logo} alt='logo' className='max-w-[350px]'/>
                </div>

                <p className='text-xs md:text-sm'>&copy; 2023 Face Nord Graphisme. Tout droit réservés.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer