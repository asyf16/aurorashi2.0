'use client';
import { Undo2, X } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { Context } from '../../components/contextProvider';
import { notesGetLS } from '../../components/contextProvider';
import MailWidget from 'components/widgets/mailWidget';
import ArtWidget from 'components/widgets/artWidget';

export default function App({ component, setComponent, isPhone }) {
    const { notes, setNotes } = useContext(Context);
    const handleClose = () => {
        if (typeof setComponent === 'function') {
            setComponent(null);
        }
    };

    useEffect(() => {
        setNotes(notesGetLS);
    }, []);

    return (
        <div
            className={`w-screen absolute left-0 flex justify-center ${
                !isPhone ? 'h-[calc(100vh-35px)] top-[35px]' : 'h-screen top-0'
            }`}
        >
            <div
                className={`flex flex-col relative ${
                    !isPhone
                        ? 'w-[80%] h-[83%] mt-8 rounded-xl bg-white overflow-hidden'
                        : 'h-full w-full mt-0 bg-stone-200'
                }`}
            >
                <div
                    className={`w-full bg-white z-[800] ${
                        isPhone ? 'h-[calc(100%-70px)] absolute left-0 top-[70px]' : 'h-full'
                    }`}
                >
                    {component === 'notes' ? (
                        <div className="bg-stone-100 h-full w-full text-stone-800 p-6 pt-8 flex flex-col">
                            <div className="text-md font-bold">Jot down some notes here...</div>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="w-full flex-1 resize-none focus:outline-none"
                                placeholder="Hi! Welcome to Aurora's portfolio! Jot down some of your thoughts here. Don't worry, it'll
                            stay!"
                            />
                        </div>
                    ) : component === 'beli' ? (
                        <div className="w-full h-full overflow-hidden ">
                            <iframe
                                src="https://beliapp.co/app/asyf16"
                                className={`w-full border-none bg-white h-full`}
                                title="Beli Website"
                            />
                        </div>
                    ) : component === 'instagram' ? (
                        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                            <iframe
                                src="https://widget.tagembed.com/2165317"
                                className={`w-[95%] border-none bg-white h-full`}
                                title="Nailart Instagram"
                            ></iframe>
                        </div>
                    ) : component === 'camera' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            camera
                        </div>
                    ) : component === 'mail' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            <MailWidget />
                        </div>
                    ) : component === 'art' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            <ArtWidget />
                        </div>
                    ) : component === 'spotify' ? (
                        <div className="w-full h-full flex justify-center items-center overflow-hidden">
                            <iframe
                                src="https://open.spotify.com/embed/playlist/2K18WCf7WWdZMX4JL8YhPf?utm_source=oembed"
                                className={`w-full border-none bg-white h-full`}
                                title="Spotify Alblum"

                                // allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
                            ></iframe>
                        </div>
                    ) : null}
                </div>

                {!isPhone && (
                    <button
                        className="z-[999] absolute top-2 left-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center"
                        onClick={handleClose}
                    >
                        <X />
                    </button>
                )}
            </div>

            {isPhone && (
                <>
                    <button
                        className="z-[999] absolute top-[12px] bg-stone-500 w-[180px] h-[45px] rounded-xl flex items-center justify-center"
                        onClick={handleClose}
                    >
                        <Undo2 className="w-7 h-7" />
                    </button>
                </>
            )}
        </div>
    );
}
