import React from 'react';
import {GiClick} from 'react-icons/gi';

const ProjectsDummy = () => {

    return (
        <div id='projects_dummy' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='py-8'>
                    {"  "}
                    {" "}
                </p>
                <p className="uppercase text-xl tracking-widest text-[#5651e5] hover:scale-105 ease-in duration-100 cursor-pointer">
                    <a className='py-8'
                        href="/files/resume.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer">
                        Resume <GiClick />
                    </a>
                </p>
            </div>
            {/* <object className='max-w-[1240px] mx-auto px-2 py-16' data="/files/resume.pdf" type="application/pdf">
                    <iframe
                        className='max-w-[1240px] mx-auto px-2 py-16'
                        src="https://docs.google.com/viewer?url=your_url_to_pdf&embedded=true"
                        frameborder="0"
                        height="100%"
                        width="100%"
                    >

                    </iframe>
                </object> */}
        </div >
    )
}

export default ProjectsDummy