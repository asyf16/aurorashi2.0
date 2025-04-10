'use client';
import { Volume2, VolumeOff } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [volume, setVolume] = useState(false);
    return (
        <div className="z-[999] w-screen h-[60px] flex flex-row justify-center items-center fixed top-0 left-0 backdrop-blur-md text-[#e6e6e6] bg-[#14102ccc] shadow-lg">
            <div className="sm:flex hidden flex-row gap-6 text-[14px]">
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
                className="hover:text-[#d1c8ffff] sm:left-18 left-6 absolute text-[17px] font-heading hover:italic"
            >
                Aurora Shi
            </a>
            <div
                className="hover:text-[#d1c8ffff] sm:right-18 right-6 absolute border border-[#e6e6e6] hover:border-[#d1c8ffff] rounded-lg p-1 cursor-pointer"
                onClick={() => setVolume(!volume)}
            >
                {volume ? <Volume2 className="w-4 h-4" /> : <VolumeOff className="w-4 h-4" />}
            </div>
        </div>
    );
}
