'use client';
import { useState, useEffect, useRef } from 'react';
import { Home } from 'lucide-react';
import ToolBar from './toolBar';
import DesktopApp from './desktopApp';

export default function Desktop() {
    const [currentApp, setCurrentApp] = useState(null);
    const containerRef = useRef(null);
    const [appPositions, setAppPositions] = useState({});
    const [draggingApp, setDraggingApp] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            setScreenDimensions({
                width: containerRect.width,
                height: containerRect.height
            });

            const initialPositions = {};
            const apps = ['notes', 'spotify', 'beli', 'home', 'instagram', 'camera', 'art', 'mail'];
            const iconSize = 70;
            const margin = 40;
            const startX = 40;
            const startY = 100;
            const iconsPerRow = 4;

            apps.forEach((app, index) => {
                const row = Math.floor(index / iconsPerRow);
                const col = index % iconsPerRow;
                initialPositions[app] = {
                    x: startX + col * (iconSize + margin),
                    y: startY + row * (iconSize + margin + 20)
                };
            });

            setAppPositions(initialPositions);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                setScreenDimensions({
                    width: containerRect.width,
                    height: containerRect.height
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDragStart = (e, appName) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        setDraggingApp(appName);
        setOffset({ x: offsetX, y: offsetY });

        const dragImage = new Image();
        dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        e.dataTransfer.setDragImage(dragImage, 0, 0);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        if (!draggingApp) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const iconSize = 70;

        let newX = e.clientX - containerRect.left - offset.x;
        let newY = e.clientY - containerRect.top - offset.y;

        newX = Math.max(0, Math.min(newX, containerRect.width - iconSize));
        newY = Math.max(35, Math.min(newY, containerRect.height - iconSize - 25));

        setAppPositions((prev) => ({
            ...prev,
            [draggingApp]: { x: newX, y: newY }
        }));
    };

    const handleDragEnd = () => {
        setDraggingApp(null);
    };

    const appData = [
        { id: 'notes', image: '/images/notes.png', name: 'Notes' },
        { id: 'spotify', image: '/images/spotify.webp', name: 'Spotify' },
        { id: 'beli', image: '/images/beli.jpg', name: 'Beli' },
        { id: 'home', image: '/images/home.png', name: 'Home', href: "/" },
        { id: 'instagram', image: '/images/insta.jpg', name: 'Instagram' },
        { id: 'camera', image: '/images/cam.png', name: 'Camera' },
        { id: 'art', image: '/images/art.jpg', name: 'Art' },
        { id: 'mail', image: '/images/mail.png', name: 'Mail' }
    ];

    return (
        <div
            ref={containerRef}
            className="w-screen h-screen overflow-hidden relative flex justify-center items-end"
            onDragOver={handleDragOver}
        >
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/images/ocean.mp4"
            />
            <ToolBar />

            {appData.map((app) => (
                <div
                    key={app.id}
                    className="absolute cursor-move"
                    style={{
                        left: `${appPositions[app.id]?.x || 0}px`,
                        top: `${appPositions[app.id]?.y || 0}px`,
                        transition: draggingApp === app.id ? 'none' : 'all 0.1s ease',
                        zIndex: draggingApp === app.id ? 10 : 1
                    }}
                    draggable
                    onDragStart={(e) => handleDragStart(e, app.id)}
                    onDragEnd={handleDragEnd}
                >
                    {app.href ? (
                        <a href={app.href} onClick={() => setCurrentApp(null)}>
                            <div className="w-[70px] flex flex-col items-center">
                                <div
                                    className="bg-cover rounded-2xl w-[70px] h-[70px]"
                                    style={{ backgroundImage: `url(${app.image})` }}
                                ></div>
                                <p className="text-sm font-bold text-center mt-2 text-white drop-shadow-md">
                                    {app.name}
                                </p>
                            </div>
                        </a>
                    ) : (
                        <div className="w-[70px] flex flex-col items-center" onClick={() => setCurrentApp(app.id)}>
                            <div
                                className="bg-cover rounded-2xl w-[70px] h-[70px]"
                                style={{ backgroundImage: `url(${app.image})` }}
                            ></div>
                            <p className="text-sm font-bold text-center mt-2 text-white drop-shadow-md">{app.name}</p>
                        </div>
                    )}
                </div>
            ))}

            <div className="m-2 px-3 py-2 h-auto bg-[#171f2b80] backdrop-blur-md border border-gray-500 rounded-xl flex flex-row gap-3 z-[999]">
                {appData.map((app) => (
                    <div key={app.id}>
                        {app.id !== 'home' && (
                            <div
                                onClick={() => setCurrentApp(app.id)}
                                className="bg-cover rounded-xl w-[50px] h-[50px] hover:scale-130 hover:translate-y-[-20px] transition-all duration-300 ease-in-out"
                                style={{ backgroundImage: `url(${app.image})` }}
                            ></div>
                        )}
                    </div>
                ))}
                <div className="h-[50px] w-0 border-0 border-r-1 border-r-gray-400/80"></div>
                <a href={'/'}>
                    <div
                        className="bg-cover rounded-xl w-[50px] h-[50px] hover:scale-130 hover:translate-y-[-20px] transition-all duration-300 ease-in-out"
                        style={{ backgroundImage: `url(/images/home.png)` }}
                    ></div>
                </a>
            </div>
            {currentApp &&  <DesktopApp component={currentApp} setComponent={setCurrentApp} />}
        </div>
    );
}
