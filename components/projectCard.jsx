'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Globe, Github } from 'lucide-react';

export default function Card({ image, title, year, description, technologies, link, website, github }) {
    const [angle, setAngle] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        const glowingPicture = cardRef.current?.querySelector('.glow-picture');
        let animationFrameId;

        const updateAngle = () => {
            setAngle(prevAngle => {
                const newAngle = (prevAngle + 1) % 360;
                if (glowingPicture) {
                    glowingPicture.style.setProperty('--angle', `${newAngle}deg`);
                }
                return newAngle;
            });
            animationFrameId = requestAnimationFrame(updateAngle);
        };

        animationFrameId = requestAnimationFrame(updateAngle);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className="bg-black text-white rounded-lg shadow-lg w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-0 pb-[57%] glow-picture rounded-xl">
                    <Image src={image} alt="Project Image" layout="fill" objectFit="cover" className="rounded-xl" />
                </div>
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