'use client';
import Image from 'next/image';
export default function Footer() {
    return (
        <div className="bg-[#1e1a30] bg-noise w-full rounded-tl-4xl rounded-tr-4xl flex flex-col p-8 sm:p-t-16 sm:pb-8 sm:px-24">
            <h1 className="font-heading sm:text-8xl text-4xl">
                Aurora <span className="italic text-[#e6e6e670]">Shi</span>
            </h1>
            <div className="flex flex-row items-end justify-between">
                <div className="flex flex-row sm:gap-20 md:gap-32 gap-6 my-8">
                    <div className="flex flex-col">
                        <div className="font-serif sm:text-xl text-sm italic bold">Social Media</div>
                        <a href="https://www.instagram.com/aurorashi16/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">1. Instagram</p>
                        </a>
                        <a href="https://www.linkedin.com/in/ashi16/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">2. Linkedin</p>
                        </a>
                        <a href="https://github.com/asyf16/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">3. Github</p>
                        </a>
                        <a href="mailto:aurorashi16@gmail.com" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">4. Email</p>
                        </a>
                        <a href="https://beliapp.co/app/asyf16" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">5. Beli</p>
                        </a>
                    </div>

                    <div className="flex-col sm:flex hidden">
                        <div className="font-serif sm:text-xl text-sm italic bold">Navigate</div>
                        <a href="#home">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">1. Home</p>
                        </a>
                        <a href="#about">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">2. About</p>
                        </a>
                        <a href="#experience">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">3. Experience</p>
                        </a>
                        <a href="#projects">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">4. Projects</p>
                        </a>
                        <a href="#portfolio">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">5. Portfolio</p>
                        </a>
                        <a href="#portfolio">
                            <p className="hover:italic hover:text-[#d1c8ffff]   text-gray-400">6. Click</p>
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-serif sm:text-xl text-sm italic bold">Credits</div>
                        <a href="https://ryo.lu/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff] text-gray-400">1. Ryo Lu</p>
                        </a>
                        <a href="https://www.ishaand.com/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:italic hover:text-[#d1c8ffff] text-gray-400">2. Ishaan Dey</p>
                        </a>
                        <a
                            href="https://brainrot.fandom.com/wiki/Trippi_Troppi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="hover:italic hover:text-[#d1c8ffff] text-gray-400">3. Trippi Troppi</p>
                        </a>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/halftone.png"
                        alt="Footer Image"
                        width={200}
                        height={100}
                        className="w-auto h-[80%]"
                    />
                </div>
            </div>
            <hr className="my-2 border-t-1 border-gray-700" />
            <p className="sm:text-sm text-xs text-gray-400">Made with love ♡ Aurora Shi © 2025</p>
            <div></div>
        </div>
    );
}
