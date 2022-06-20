import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from 'next/link';
import {contactItems} from '../public/assets/data';



const Hero = () => {
    return (
        <div id='hero' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome to my portfolio</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-[#5651e5]'>Pavan Kumar Kandapagari</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Deep Learning Engineer / Software Developer
                    </h1>
                    <p className='py-1 text-gray-600 max-w-[70%] m-auto'>
                        A Deep Learning engineer with specialization in Computer vision software development. An aspiring Full stack Deep Learning Engineer.
                    </p>
                    <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                        {contactItems.map((Item, idx) => (
                            <Link key={idx} href={`${Item.link}`}>
                                <a target='_blank'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <Item.icon className='m-auto text-[#5651e5]' />
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero