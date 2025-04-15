'use client';
import { useState } from 'react';

export default function Phone() {
    const [currentApp, setCurrentApp] = useState(null);
    const appData = [
        { id: 'notes', image: '/images/notes.png', name: 'Notes' },
        { id: 'spotify', image: '/images/spotify.webp', name: 'Spotify' },
        { id: 'beli', image: '/images/beli.jpg', name: 'Beli' },
        { id: 'home', image: '/images/home.png', name: 'Home', href: '/' },
        { id: 'instagram', image: '/images/insta.jpg', name: 'Instagram' },
        { id: 'camera', image: '/images/cam.png', name: 'Camera' },
        { id: 'art', image: '/images/art.jpg', name: 'Art' },
        { id: 'mail', image: '/images/mail.png', name: 'Mail' }
    ];

    return (
        <div className="w-screen h-screen overflow-hidden relative flex">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/images/moon.mp4"
            />
            <div className="flex flex-row w-full gap-4 justify-center items-start px-6 py-8">
                <div className="w-1/2 bg-white relative rounded-2xl">
                    <div className="pb-[100%]"></div>
                    <div className="absolute inset-0">{/* Content goes here */}</div>
                </div>
                <div className="w-1/2 bg-white relative rounded-2xl">
                    <div className="pb-[100%]"></div>
                    <div className="absolute inset-0">{/* Content goes here */}</div>
                </div>
            </div>
        </div>
    );
}
