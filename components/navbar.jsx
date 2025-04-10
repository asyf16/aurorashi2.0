"use client"
import { Volume2, VolumeOff } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [volume, setVolume] = useState(false);
    return (
        <div className="z-[999] w-screen h-[60px] flex flex-row justify-center items-center fixed top-0 left-0 backdrop-blur-md text-[#e6e6e6] bg-[#04020e] shadow-lg">
            <div className="sm:flex hidden flex-row gap-6 text-[14px]">
                <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">About</div>
                <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Experience</div>
                <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Projects</div>
                <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Portfolio</div>
                <div className="hover:text-[#d1c8ffff] hover:italic cursor-pointer">Click</div>
            </div>
            <div className="sm:left-18 left-6 absolute text-[17px] font-heading">Aurora Shi</div>
            <div className="sm:right-18 right-6 absolute border border-[#e6e6e6] rounded-lg p-1 cursor-pointer" onClick={() => setVolume(!volume)}>
                {volume ? <Volume2 className="w-4 h-4" /> : <VolumeOff className="w-4 h-4" />}
            </div>
        </div>
    );
}
