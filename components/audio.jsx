import { useState, useEffect } from 'react';
import { Volume2, VolumeOff } from 'lucide-react';

function Sound() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        // Initialize audio when component mounts
        const audioElement = new Audio('/bg.mp3');
        audioElement.loop = true;
        setAudio(audioElement);

        // Cleanup function to stop audio when component unmounts
        return () => {
            if (audioElement) {
                audioElement.pause();
                audioElement.currentTime = 0;
            }
        };
    }, []);

    const playMusic = () => {
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            // Create a promise to handle the play action
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Audio started playing successfully
                    })
                    .catch((error) => {
                        console.log('Playback failed:', error);
                    });
            }
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="hover:text-[#d1c8ffff] border border-[#e6e6e6] hover:border-[#d1c8ffff] rounded-lg p-1 cursor-pointer"
            onClick={playMusic}
        >
            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeOff className="w-4 h-4" />}
        </div>
    );
}

export default Sound;
