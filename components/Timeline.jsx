'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { MousePointer } from 'lucide-react';

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%']
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans sm:px-10 px-6" ref={containerRef}>
            <div className="w-full flex items-center justify-start">
                <div className="sm:w-2/3 w-full sm:px-16 flex flex-col items-start justify-center md:mt-26 mt-8">
                    <h2 className="mb-2">Experience</h2>
                    <p className="sm:text-lg text-sm">
                        With hands-on experience in{' '}
                        <span className="font-serif italic font-bold">full-stack development</span> , I have contributed
                        to a variety of high-impact projects across multiple industries. I’m passionate about creating
                        beautiful, <span className="font-serif italic font-bold">user-friendly</span> frontends paired
                        with solid, scalable backends. I am always eager to learn and try out new experiences!
                    </p>
                    <a
                        href="https://drive.google.com/drive/folders/1LxYEXHacO-xeabSRKWcw-p50hZqi-ae6?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="bg-[#9284d9] mt-4 sm:w-[180px] w-[150px] rounded-4xl px-3 hover:bg-[#d1c8ff] text-[#151226] py-2 font-bold sm:h-[40px] h-[32px] relative overflow-hidden transition-all duration-300 ease-in-out"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span
                                className={`text-sm sm:text-lg absolute sm:inset-y-[6px] inset-y-[5px] sm:w-[180px] w-[150px] left-0 text-center transform transition-transform duration-300 ease-in-out ${
                                    isHovered ? '-translate-x-full' : 'translate-x-0'
                                }`}
                            >
                                View my Resume
                            </span>
                            <div
                                className={`absolute sm:inset-y-[6px] inset-y-[5px] sm:w-[180px] w-[150px] left-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                                    isHovered ? 'translate-x-0' : 'translate-x-full'
                                }`}
                            >
                                <MousePointer className="h-5 w-5 ml-2" />
                            </div>
                        </button>
                    </a>
                </div>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#04020e] flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-[#4c4282b3] border border-neutral-300 p-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="hidden md:block text-xl md:pl-20 md:text-4xl">{item.title}</h2>
                                <h2 className="hidden md:block text-lg md:pl-20 md:text-xl text-[#7d71bf]">
                                    {item.subtitle ?? ''}
                                </h2>
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <div className="flex flex-col">
                                <h2 className="md:hidden block text-2xl text-left ">{item.title}</h2>
                                <h2 className="md:hidden block text-sm mb-4 text-left text-[#7d71bf]">
                                    {item.subtitle ?? ''}
                                </h2>
                            </div>
                            {item.content}{' '}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + 'px'
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#7635cc] via-[#2364cc] to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
