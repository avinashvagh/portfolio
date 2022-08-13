

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#34A6A7]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Social Network App'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='Node.js, Express, React, Redux and MongoDB along with ES6+'
          />
          <ProjectItem
            title='GitHub Finder'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS, Tailwind &#38; Daisy UI'

          />
          <ProjectItem
            title='House Marketplace'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS, Firebase '

          />
          <ProjectItem
            title='fullstack MERN Support Ticket System'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='MongoDB, Express, React.js, Node.js, Redux and Redux Toolkit'

          />
          <ProjectItem
            title='YelpCamp'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='MongoDB, Express, Node.js, JavaScript, CSS'

          />
          
        </div>
      </div>
    </div>
  )
}

export default Projects