"use client"
import React, {useState, useEffect} from 'react'
import Logo from '../assets/img/logo.png'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24' } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
            <Link href={''}>
                <Image className='w-[200px] xl:w-[300px] hover:animate-pulse' src={Logo} alt='logo'/>
            </Link>
            <div className='hidden lg:block'>
                <Nav/>
            </div>
            <div className='hidden lg:block'>
                <Socials/>
            </div>
            <div className='lg:hidden'>
                <NavMobile/>
            </div>

        </div>
    </header>
  )
}

export default Header