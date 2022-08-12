
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/aboutProfile.jpg'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#34A6A7]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>/ / I am not your average developer</p>
                <p className='py-2 text-gray-600'>
            I have spent my few months working as a production engineer after graduated as a mechanical engineer in 2021. At this time, I found myself in a position where I was not find interest in the field mechanical engineering but I was interested in the field of software development. So, I decided to take the opportunity to learn and develop my skills in the field of software development. I started exploring HTML and css in 2021 and I was immediately hooked. 
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive.Then I enrolled in bootcamp in 2022 to learn full-stack development. I am now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
            </div>
            <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={AboutImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About