import Image from "next/image";
import React from "react";
import aboutImg from '../public/assets/alt-about.jpg';

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        {" "}
                        About{" "}
                    </p>
                    <h2 className="py-4">Who I am</h2>
                    <p className='py-2 text-gray-600'>Not Just your average AI Developer</p>
                    <p className='py-2 text-gray-600'>
                        I am currently working as Deep learning engineer at{" "}
                        <a
                            href="https://www.agile-robots.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agile Robots Ag
                        </a>
                    </p>
                    <p className='py-2 text-gray-600 justify-center'>
                        While working as a Production Engineer, I felt a strong gravity
                        towards the software side of things. Having always had an
                        inquisitive mind, I started looking at the various software
                        developments occurring in the technological world. This was when I
                        got introduced to the field of Machine Learning and Automation.
                        Being a Mechanical Engineer, the idea of self-driving cars and
                        robotic arms intrigued me to the core.
                    </p>
                    <p className='py-2 text-gray-600 justify-between'>
                        This was when I decided to resign from my old job and pursue a
                        Masters in Digital Engineering. Coming to OVGU, opened up a portal
                        of opportunities for me as I learned about the various technological
                        advancements and software systems. After almost a year at OVGU, I
                        have become a skilled coder in Java and Python and have made myself
                        quite familiar with different Machine Learning algorithms and
                        libraries.
                    </p>
                    <p className='py-2 text-gray-600 justify-self-auto'>
                        Along with my technological skill development, I have also had an
                        overall development including in soft skills like analytical
                        thinking capabilities, working in a team, leadership qualities,
                        stress handling etc. With these developments, I plan to grow in a
                        way so as to be able to work with the newest of technologies in the
                        future and hopefully one day lead a team in a project that will
                        create a difference in the world. At Agile Robots I worked with
                        PyTorch for making an inhouse object detection solution as my first
                        project. Later on I along with a team worked to integerate this
                        project with a CI/CD pipeline on GitLab, which provided me with well
                        needed experirence with a version control i.e., git.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Check out my recent projects</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className="rounded-xl" src={aboutImg} alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;
