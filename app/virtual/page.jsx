'use client';
import Desktop from './desktop';
import Phone from './phone';

import { useEffect, useState } from 'react';
export default function Virtual() {
    const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        const handleResize = () => {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (screenDimensions.width === 0) {
        return (
            <div className="w-[100%] h-screen flex px-4 items-center justify-center bg-[#f9f9f9] dark:bg-[#151515]">
                <div className="flex items-center space-x-1 text-xl font-semibold">
                    <span>Loading Aurora&apos;s Device</span>
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:0.1s]">.</span>
                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                </div>
            </div>
        );
    }
    return <div className="w-[100%] h-screen">{screenDimensions.width >= 520 ? <Desktop /> : <Phone />}</div>;
}
