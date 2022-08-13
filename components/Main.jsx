

import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
             <div>
               <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
               <h1 className='py-4 text-gray-700'> Hi, I&#39;m <span className='text-[#34A6A7]'>Avinash</span></h1>
               <h1 className='py-2 text-gray-700'> A Front-End Developer</h1>
               <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I&#39;m a front-end developer specializing in building user interfaces and experiences. I have a passion for creating clean, elegant, and intuitive user interfaces. Currently, I&#39;m focused on building responsive front-end web applications while learning back-end technologies.

                I&#39;m a bootcamp-taught developer and I&#39;m always looking to learn new technologies and techniques. 
               </p>
               <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <a href="https://linkedin.com/in/avinashvagh">
                      <FaLinkedinIn />
                    </a>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <a href="https://github.com/avinashvagh">
                      <FaGithub />
                    </a>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <a href="mailto:avivagh0001@gmail.com">
                      <AiOutlineMail />
                    </a>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <a href="https://avinashvagh.hashnode.dev">
                      <BsFillPersonLinesFill />
                    </a>
                     </div>

               </div>

            </div>
        </div>
    </div>
  )
}

export default Main