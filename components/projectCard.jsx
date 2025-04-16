'use client';
import Image from 'next/image';
import { Globe, Github } from 'lucide-react';

export default function ProjectCard({ image, title, year, description, technologies, link, website, github }) {
    return (
        <div className="bg-black text-white rounded-lg shadow-lg w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="relative w-full inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none">
                    <span className={`absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#04020e_0%,#04020e_50%,#477bc9_100%)]`} />

                    <div className="relative w-full h-0 pb-[57%] rounded-xl">
                        <Image src={image} alt="Project Image" layout="fill" objectFit="cover" className="rounded-xl" />
                    </div>
                </button>
            </a>

            <div className="mt-4 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <h2 className="sm:text-xl text-lg font-bold">{title}</h2>
                    <p className="sm:text-md text-sm italic"> - {year}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-5 h-5" />
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
            <p className="sm:text-sm text-xs text-gray-400">{technologies.join(' | ')}</p>
            <div className="mt-2">
                <p className="sm:text-md text-sm">{description}</p>
            </div>
        </div>
    );
}
