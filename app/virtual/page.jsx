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

    return <div className="w-screen h-screen">{screenDimensions.width >= 520 ? <Desktop /> : <Phone />}</div>;
}
