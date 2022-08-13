
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg'




const Contact = () => {
  return (
    <div className='w-full lg:h-screen '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-sl tracking-widest uppercase text-[#34a6a7]'>
                Contact
            </p>
            <h2 className='py-4'>
                Get In Touch
            </h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left  */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                        <Image
                        className='rounded-xl hover:scale-105 ease-in duration-300'
                        src={ContactImg}
                        alt='/'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Avinash Vagh</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4'>
                                I am available for full-time positions. Contact me and let&#39;s build together.
                            </p>
                        </div>

                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
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



                {/* right  */}
                <div className='col-span-3  w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>

                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label htmlFor='name' className='uppercase text-sm py-2'>Name</label>
                                    <input type='text' id='name' className='border-2 rounded-lg p-3 flex border-gray-300'/>


                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='phone-number' className='uppercase text-sm py-2'>Phone Number</label>
                                    <input type='number' id='phone-number' className='border-2 rounded-lg p-3 flex border-gray-300'/>


                                </div>

                            </div>

                            <div className='flex flex-col py-2'>
                            <label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
                            <input type='email' id='email' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col py-2'>
                            <label htmlFor='subject' className='uppercase text-sm py-2'>Subject</label>
                            <input type='text' id='subject' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col py-2'>
                            <label htmlFor='subject' className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300'rows="10"></textarea>
                            </div>

                            <button className='w-full p-4 text-gray-100 mt-4'>
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </div>

            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp  className='text-[#34A6A7]' size={30}/>
                    </div>
                </Link>
            </div>


            </div>
    </div>
  )
}

export default Contact