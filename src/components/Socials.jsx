import React from 'react'

import {social} from '../data'
import Link from 'next/link'

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return <li className='flex justify-center items-center text-accent' key={index}>
                <Link className='text-xl hover:-translate-y-1 transition-all duration-300' href={item.href} target='_blank'>
                  {item.icon}
                </Link>
        </li>
      })}
    </ul>
  )
}

export default Socials