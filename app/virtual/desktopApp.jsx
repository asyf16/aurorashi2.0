'use client';
import { X } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { Context } from '../../components/contextProvider';
import { notesGetLS } from '../../components/contextProvider';

export default function DesktopApp({ component, setComponent, isPhone }) {
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
        <div className="w-screen h-[calc(100vh-35px)] absolute top-[35px] left-0 flex justify-center">
            <div className="w-[80%] h-[83%] bg-white mt-8 z-[900] rounded-xl flex flex-col relative">
                <button
                    className="absolute top-2 left-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center"
                    onClick={handleClose}
                >
                    <X />
                </button>
                <div className="w-full h-full">
                    {component === 'notes' ? (
                        <div className="bg-stone-100 h-full w-full rounded-xl text-stone-800 p-6 pt-8 flex flex-col">
                            <div className="text-md font-bold">Leave your notes here...</div>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="w-full flex-1 resize-none focus:outline-none"
                                placeholder="Hi! Welcome to Aurora's portfolio! Jot down some of your thoughts here. Don't worry, it'll
                            stay!"
                            />
                        </div>
                    ) : component === 'beli' ? (
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <iframe
                                src="https://beliapp.co/app/asyf16"
                                className="w-full h-full border-none"
                                title="Beli Website"
                            />
                        </div>
                    ) : component === 'instagram' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            <iframe
                                src="https://widget.tagembed.com/2165317"
                                className="w-[95%] h-full border-none"
                                title="Nailart Instagram"
                            ></iframe>
                        </div>
                    ) : component === 'camera' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            camera
                        </div>
                    ) : component === 'email' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            email
                        </div>
                    ) : component === 'art' ? (
                        <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
                            art
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
