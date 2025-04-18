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
                        </span>{' '}, gym-goer, and{' '}
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
                        </span>{' '}. I also love{' '}
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
                        <div className="flex gap-2 mt-4 text-[#d1c8ffff]">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
