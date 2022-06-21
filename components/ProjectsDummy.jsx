import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectsDummy = () => {

    return (
        <div id='projects_dummy' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <div className="flex flex-col uppercase text-xl tracking-widest text-[#5651e5] hover:scale-y-110 ease-in duration-100 cursor-pointer">
                    <a className='py-8'
                        href="/files/resume.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer">
                        Resume<BiLinkExternal />
                    </a>
                </div>
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