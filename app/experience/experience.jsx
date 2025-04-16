'use client';
import { MousePointer } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-screen h-screen bg-linear-to-t from-[#04020e] to-[#1b192c] flex items-center justify-center" id="experience">
            <div className="mx-16 max-w-[1100px] flex md:flex-row sm:flex-col flex-col items-center justify-center sm:gap-16 gap-2">
                <div className="sm:w-1/2 w-full">
                    <h2 className="mb-2">Experience</h2>
                    <p className="sm:text-lg text-sm">
                        With hands-on experience in{' '}
                        <span className="font-serif italic font-bold">full-stack development</span> , I have contributed
                        to a variety of high-impact projects across multiple industries. I’m passionate about creating
                        beautiful, <span className="font-serif italic font-bold">user-friendly</span> frontends paired
                        with solid, scalable backends. I enjoy working with modern technologies like{' '}
                        <span className="font-serif italic font-bold">React</span>,{' '}
                        <span className="font-serif italic font-bold">Javascript</span>, and{' '}
                        <span className="font-serif italic font-bold">Next </span>
                        to build seamless and efficient applications. I am always eager to learn and try out new
                        experiences!
                    </p>
                    <a
                        href="https://drive.google.com/drive/folders/1LxYEXHacO-xeabSRKWcw-p50hZqi-ae6?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="bg-[#9284d9] mt-4 w-[180px] rounded-4xl px-3 hover:bg-[#d1c8ff] text-[#151226] py-2 font-bold h-[40px] relative overflow-hidden transition-all duration-300 ease-in-out"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span
                                className={`absolute inset-y-[8px] w-[180px] left-0 text-center transform transition-transform duration-300 ease-in-out ${
                                    isHovered ? '-translate-x-full' : 'translate-x-0'
                                }`}
                            >
                                View my Resume
                            </span>
                            <div
                                className={`absolute inset-y-[8px] w-[180px] left-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                                    isHovered ? 'translate-x-0' : 'translate-x-full'
                                }`}
                            >
                                <MousePointer className="h-5 w-5 ml-2" />
                            </div>
                        </button>
                    </a>
                </div>
                <div className="sm:w-1/2 w-full"></div>
            </div>
        </div>
    );
}
