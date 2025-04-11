'use client';
import { Volume2, VolumeOff, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [volume, setVolume] = useState(false);
    return (
        <div className="z-[999] w-screen h-[60px] flex flex-row justify-center items-center fixed top-0 left-0 backdrop-blur-md text-[#e6e6e6] bg-[#14102ccc] shadow-lg">
            <div className="sm:flex hidden flex-row gap-6 text-[14px]">
                <a href="#home">
                    <div className=" hover:text-[#d1c8ffff] hover:italic cursor-pointer">Home</div>
                </a>
                <a href="#about">
                    <div className=" hover:text-[#d1c8ffff] hover:italic cursor-pointer">About</div>
                </a>
                <a href="#experience">
                    <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Experience</div>
                </a>
                <a href="#projects">
                    <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Projects</div>
                </a>

                <a href="#portfolio">
                    <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Portfolio</div>
                </a>

                <a href="#about">
                    <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Click</div>
                </a>
            </div>
            <a
                href="#home"
                className="hover:text-[#d1c8ffff] sm:left-18 left-8 absolute text-[17px] font-heading hover:italic"
            >
                Aurora Shi
            </a>
            <div className="flex flex-row gap-4 sm:right-18 right-8 absolute">
                {openMenu ? (
                    <X className="sm:hidden flex w-6 h-6" onClick={() => setOpenMenu(!openMenu)} />
                ) : (
                    <Menu className="sm:hidden flex w-6 h-6" onClick={() => setOpenMenu(!openMenu)} />
                )}
                <div
                    className="hover:text-[#d1c8ffff] border border-[#e6e6e6] hover:border-[#d1c8ffff] rounded-lg p-1 cursor-pointer"
                    onClick={() => setVolume(!volume)}
                >
                    {volume ? <Volume2 className="w-4 h-4" /> : <VolumeOff className="w-4 h-4" />}
                </div>
            </div>
            {openMenu && (
                <div className="flex flex-col border border-[#292442] sm:hidden fixed top-[70px] right-[10px] rounded-lg backdrop-blur-md text-[#e6e6e6] bg-[#1a1536cc] shadow-lg px-6 py-2 gap-2 text-lg">
                    <a href="#home">
                        <div className=" hover:text-[#d1c8ffff] hover:italic cursor-pointer">
                            <span className="font-serif italic font-bold">1.</span> Home
                        </div>
                    </a>
                    <a href="#about">
                        <div className=" hover:text-[#d1c8ffff] hover:italic cursor-pointer">
                            <span className="font-serif italic font-bold">2.</span> About
                        </div>
                    </a>
                    <a href="#experience">
                        <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">
                            <span className="font-serif italic font-bold">3.</span> Experience
                        </div>
                    </a>
                    <a href="#projects">
                        <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">
                            <span className="font-serif italic font-bold">4.</span> Projects
                        </div>
                    </a>

                    <a href="#portfolio">
                        <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">
                            <span className="font-serif italic font-bold">5.</span> Portfolio
                        </div>
                    </a>

                    <a href="#about">
                        <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">
                            <span className="font-serif italic font-bold">6.</span> Click
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
}
