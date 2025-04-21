'use client';
import { useState } from 'react';
import App from './app';
import TimeWidget from 'components/widgets/timeWidget';
import WeatherWidget from 'components/widgets/weatherWidget';
import Link from 'next/link';

export default function Phone() {
    const [currentApp, setCurrentApp] = useState(null);
    const appData = [
        { id: 'notes', image: '/images/notes.png', name: 'Notes' },
        { id: 'spotify', image: '/images/spotify.webp', name: 'Spotify' },
        { id: 'beli', image: '/images/beli.jpg', name: 'Beli' },
        { id: 'instagram', image: '/images/insta.jpg', name: 'Instagram' },
        { id: 'art', image: '/images/art.jpg', name: 'Art' },
        { id: 'mail', image: '/images/mail.png', name: 'Mail' },
        { id: 'camera', image: '/images/cam.png', name: 'Camera' },
        { id: 'home', image: '/images/home.png', name: 'Home', href: '/' }
    ];

    return (
        <div className="w-[100%] h-[100%] overflow-hidden relative flex flex-col">
            <video
                autoPlay="autoplay"
                playsInline="playsinline"
                loop={true}
                muted={true}
                controls={false}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/images/moon.mp4"
            />
            <div className="flex flex-row w-full gap-6 justify-center items-start px-6 py-8">
                <div className="w-1/2 bg-white relative rounded-2xl  overflow-hidden">
                    <div className="pb-[100%]"></div>
                    <div className="absolute inset-0">
                        <WeatherWidget />
                    </div>
                </div>
                <div className="w-1/2 relative rounded-2xl overflow-hidden">
                    <div className="pb-[100%]"></div>
                    <div className="absolute inset-0">
                        <TimeWidget />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full px-6 justify-between mb-6">
                {appData.slice(0, 4).map((app) => (
                    <div
                        className="w-[62px] h-[62px] bg-white relative rounded-2xl bg-cover bg-center "
                        key={app.id}
                        onClick={() => setCurrentApp(app.id)}
                        style={{ backgroundImage: `url(${app.image})` }}
                    ></div>
                ))}
            </div>

            <div className="flex flex-row w-full px-6 justify-between">
                {appData.slice(4, 7).map((app) => (
                    <div
                        className="w-[62px] h-[62px] bg-white relative rounded-2xl bg-cover bg-center "
                        key={app.id}
                        onClick={() => setCurrentApp(app.id)}
                        style={{ backgroundImage: `url(${app.image})` }}
                    ></div>
                ))}
                <Link href="/">
                    <div
                        className="w-[62px] h-[62px] bg-white relative rounded-2xl bg-cover bg-center "
                        onClick={() => setCurrentApp(null)}
                        style={{ backgroundImage: `url(/images/home.png)` }}
                    ></div>
                </Link>
            </div>
            {currentApp && <App component={currentApp} setComponent={setCurrentApp} isPhone={true} />}
        </div>
    );
}
