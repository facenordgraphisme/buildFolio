import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Project = ({item}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-black/50 transition-all duration-300'>
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className="mb-8">
        <Image className='rounded-2xl shadow-xl shadow-gray-300 group-hover:opacity-10  transition-all duration-300' src={item.image} alt={item.name}/>
      </div>
      <div>
        <p className='capitalize text-accent text-lg mb-3'>{item.category}</p>
        <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      </div>
      <div className='hidden group-hover:block absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{item.name}</h3>
            <p className='pb-4 pt-2 text-white text-center'>Wordpress</p>
            <Link href={item.link} target='_blank'>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Voir plus</p>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Project