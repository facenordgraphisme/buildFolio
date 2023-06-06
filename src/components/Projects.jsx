"use client"
import React, {useEffect, useState} from 'react'


import {projectsData} from '../data'
import {projectsNav} from '../data'
import { motion } from 'framer-motion'
import Project from './Project'

const Projects = () => {
  const [item, setItem] = useState({name: 'tout'})
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'tout') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter(
        (projects) => {
          return projects.category.toLowerCase() === item.name
        });
        setProjects(newProjects);
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()})
    setActive(index)
  }

  return (
    <div>
      <motion.nav
      initial={{ x: 200, opacity: 0}}
      whileInView={{ x: 0, opacity: 1}}
      transition={{ duration: 1.5, delay:0.5 }}
      viewport={{ once: true }}
      className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center font-semibold'>
          {projectsNav.map((item, index) => {
            return <li 
            onClick={(e) => {
              handleClick(e, index)
            }} 
            key={index}
            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
            >{item.name}
            
            </li>
          })}
        </ul>
      </motion.nav>
      {/* grid */}
      <motion.section
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 1.5, delay:0.5 }}
      viewport={{ once: true }}
      className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />
        })}
      </motion.section>
    </div>
  )
}

export default Projects