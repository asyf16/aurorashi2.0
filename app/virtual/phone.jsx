'use client';
import { useState } from 'react';
import App from './app';
import TimeWidget from 'components/timeWidget';
import WeatherWidget from 'components/weatherWidget';
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
        { id: 'home', image: '/images/home.png', name: 'Home', href: '/' },
        { id: 'camera', image: '/images/cam.png', name: 'Camera' }
    ];

    return (
        <div className="w-screen h-screen overflow-hidden relative flex flex-col">
            <video
                autoPlay
                loop
                muted
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
                {appData.slice(4, 6).map((app) => (
                    <div
                        className="w-[62px] h-[62px] bg-white relative rounded-2xl bg-cover bg-center "
                        key={app.id}
                        onClick={() => setCurrentApp(app.id)}
                        style={{ backgroundImage: `url(${app.image})` }}
                    ></div>
                ))}

                <div className="w-[60px] h-[60px]"></div>
                <div className="w-[60px] h-[60px]"></div>
            </div>

            <div className="w-full absolute left-0 bottom-0 px-6 py-6">
                <div className="w-full bg-[#171f2bbd] backdrop-blur-md flex flex-row justify-center items-center gap-4 rounded-4xl p-3">
                    <div
                        className="w-[62px] h-[62px] bg-white relative rounded-2xl bg-cover bg-center "
                        onClick={() => setCurrentApp('camera')}
                        style={{ backgroundImage: `url(/images/cam.png)` }}
                    ></div>
                    <Link href="/">
                        <div
                            className="w-[62px] h-[62px] bg-white relative rounded-2xl bg-cover bg-center "
                            onClick={() => setCurrentApp(null)}
                            style={{ backgroundImage: `url(/images/home.png)` }}
                        ></div>
                    </Link>
                </div>
            </div>
            {currentApp && <App component={currentApp} setComponent={setCurrentApp} isPhone={true} />}
        </div>
    );
}
