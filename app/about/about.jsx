'use client';
import Image from 'next/image';
import { Instagram, Linkedin, Github, Mail, Beef } from 'lucide-react';

export default function About() {
    return (
        <div className="w-screen h-[100vh] bg-[#04020e] flex items-center justify-center" id="about">
            <div className="mx-16 max-w-[1100px] flex md:flex-row sm:flex-col flex-col items-center justify-center sm:gap-16 gap-2">
                <Image
                    src="/images/Portrait.webp"
                    priority
                    alt="Aurora Shi"
                    width={450}
                    height={0}
                    style={{ width: 'auto', height: 'auto' }}
                />
                <div className="flex flex-col">
                    <h2 className="mb-2">About me</h2>
                    <div className="sm:text-lg text-sm mb-2">
                        Hi! My name is Aurora. I am a{' '}
                        <span className="font-serif font-bold group relative italic">Software Engineering </span>{' '}
                        student at the <span className="font-serif bold italic">University of Waterloo</span>,
                        graduating 2028.
                    </div>
                    <div className="sm:block hidden sm:text-lg text-sm mb-2">
                        In my spare time, I am a painter,{' '}
                        <span className="font-serif italic text-[#d1c8ffff] font-bold group relative">
                            nail artist
                            <div className="left-[20px] top-[90px] hidden absolute group-hover:block transform scale-350 transition-all duration-300 z-[999]">
                                <Image
                                    src="/images/nails.webp"
                                    alt="Software Engineering"
                                    width={300}
                                    height={0}
                                    className="rounded-lg"
                                />
                            </div>
                        </span>{' '}
                        , gym-goer, and{' '}
                        <span className="font-serif italic text-[#d1c8ffff] font-bold group relative">
                            fisher(wo)man
                            <div className="left-[20px] top-[80px] hidden absolute group-hover:block transform scale-220 transition-all duration-300 z-[999]">
                                <Image
                                    src="/images/fish.webp"
                                    alt="Software Engineering"
                                    width={300}
                                    height={0}
                                    className="rounded-lg"
                                />
                            </div>
                        </span>{' '}
                        . I also love{' '}
                        <span className="font-serif italic text-[#d1c8ffff] font-bold group relative">
                            baking
                            <div className="left-[20px] top-[105px] hidden absolute group-hover:block transform scale-550 transition-all duration-300 z-[999]">
                                <Image
                                    src="/images/cake.webp"
                                    alt="Software Engineering"
                                    width={300}
                                    height={0}
                                    className="rounded-lg"
                                />
                            </div>
                        </span>{' '}
                        and making creative struggle meals in the kitchen!
                    </div>
                    <div className="sm:hidden block sm:text-lg text-sm mb-2">
                        In my spare time, I am a <span className="font-serif italic bold">painter</span>,{' '}
                        <span className="font-serif italic bold">nail artist</span>,{' '}
                        <span className="font-serif italic bold">fisher(wo)man</span>, and gym-goer. I also love{' '}
                        <span className="font-serif italic bold">baking</span>!
                    </div>
                    <div className="sm:text-lg text-sm">Thanks for checking out my projects and portfolio :)</div>
                    <div>
                        <div className="flex gap-2 mt-4 text-[#d1c8ffff] items-center">
                            <a href="https://www.instagram.com/aurorashi16/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5 text-white hover:text-[#d1c8ffff] transition" />
                            </a>
                            <a href="https://www.linkedin.com/in/ashi16/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-white hover:text-[#d1c8ffff] transition" />
                            </a>
                            <a href="https://github.com/asyf16/" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5 text-white hover:text-[#d1c8ffff] transition" />
                            </a>
                            <a href="mailto:aurorashi16@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="h-5 w-5 text-white hover:text-[#d1c8ffff] transition" />
                            </a>
                            <a href="https://beliapp.co/app/asyf16" target="_blank" rel="noopener noreferrer">
                                <Beef className="h-5 w-5 text-white hover:text-[#d1c8ffff] transition" />
                            </a>
                            <a href="https://se-webring.xyz/" target="_blank" rel="noopener noreferrer">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 960 960"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-white hover:text-[#d1c8ffff]"
                                    fill="currentColor"
                                >
                                    <rect width="960" height="960" fill="none" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M390.499 272.146V687.477C491.737 672.742 569.501 585.38 569.501 479.811C569.501 374.243 491.737 286.881 390.499 272.146ZM367.396 749.527C364.991 749.591 362.577 749.623 360.157 749.623C211.506 749.623 91 628.824 91 479.811C91 330.799 211.506 210 360.157 210C362.577 210 364.991 210.032 367.396 210.096C368.31 210.032 369.233 210 370.163 210H869V749.623H370.163C369.233 749.623 368.31 749.591 367.396 749.527ZM330.687 687.602V272.021C229.023 286.379 150.813 373.94 150.813 479.811C150.813 585.683 229.023 673.244 330.687 687.602ZM529.346 269.958H809.187V689.665H529.346C590.325 640.201 629.313 564.57 629.313 479.811C629.313 395.053 590.325 319.422 529.346 269.958Z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
