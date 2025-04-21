'use client';
import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';

export default function CameraWidget({ closeCamera }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [selectedFilter, setSelectedFilter] = useState('none');
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const enableCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error('Error accessing webcam:', err);
            }
        };

        enableCamera();
        return () => {
            stopCamera();
        };
    }, []);

    useEffect(() => {
        if (closeCamera) {
            stopCamera();
        }
    }, [closeCamera]);

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');

        ctx.filter =
            selectedFilter === 'sepia'
                ? 'sepia(1)'
                : selectedFilter === 'grayscale'
                ? 'grayscale(1)'
                : selectedFilter === 'saturate'
                ? 'saturate(2)'
                : selectedFilter === 'blueTint'
                ? 'hue-rotate(180deg) brightness(1.1)'
                : 'none';

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setPhoto(dataUrl);
    };

    const downloadPhoto = () => {
        if (!photo) return;
        const link = document.createElement('a');
        link.href = photo;
        link.download = 'photobooth.png';
        link.click();
    };

    return (
        <div className="relative h-full w-full bg-black flex flex-col justify-center items-center overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
                    selectedFilter === 'sepia'
                        ? 'sepia'
                        : selectedFilter === 'grayscale'
                        ? 'grayscale'
                        : selectedFilter === 'saturate'
                        ? 'saturate-200'
                        : selectedFilter === 'blueTint'
                        ? 'hue-rotate-180 brightness-110'
                        : ''
                }`}
            />
            <canvas ref={canvasRef} className="hidden" />

            <div className="absolute top-4 z-10">
                <div className="text-center font-serif italic font-bold mb-2 text-xl sm:text-2xl ">
                <span className="bg-black/20 px-4 rounded-full">Aurora&apos;s Photobooth</span></div>
                <div className="flex gap-2 bg-black/50 p-2 rounded-xl flex-wrap max-w-[90vw] justify-center">
                    {['none', 'sepia', 'grayscale', 'saturate', 'blueTint'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setSelectedFilter(f)}
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                selectedFilter === f
                                    ? 'bg-white text-black'
                                    : 'bg-gray-800 text-white hover:bg-gray-600'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-6 flex justify-center gap-4 z-10">
                <div className="rounded-full border-white border-[2px] bg-transparent">
                    <div
                        onClick={capturePhoto}
                        className="h-14 w-14 bg-white rounded-full border-[3px] border-black shadow-lg hover:bg-gray-300 cursor-pointer"
                    />
                </div>
                {photo && (
                    <button
                        onClick={downloadPhoto}
                        className="bg-white px-4 py-2 rounded-full flex items-center gap-2 text-black font-semibold bg-white shadow-sm hover:bg-gray-200"
                    >
                        <Download className="w-4 h-4" />
                        Save
                    </button>
                )}
            </div>

            {photo && (
                <img
                    src={photo}
                    alt="Captured"
                    className="absolute bottom-[90px] right-4 w-24 h-24 object-cover border-2 border-white rounded-md z-10"
                />
            )}
        </div>
    );
}
