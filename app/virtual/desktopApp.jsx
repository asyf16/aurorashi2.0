'use client';
import { X } from 'lucide-react';

export default function DesktopApp({ component, setComponent }) {
    const handleClose = () => {
        if (typeof setComponent === 'function') {
            setComponent(null);
        }
    };
    return (
        <div className="w-screen h-[calc(100vh-35px)] absolute top-[35px] left-0 flex justify-center">
            <div className="w-[80%] h-[83%] bg-white mt-8 z-[900] rounded-xl flex flex-col">
                <div className="bg-gray-600 w-full h-[25px] rounded-t-xl flex items-center justify-end pr-2">
                    <button
                        className="bg-red-500 w-4 h-4 rounded-full flex items-center justify-center"
                        onClick={handleClose}
                    >
                        <X />
                    </button>
                </div>
                <div className="w-full h-[calc(100%-25px)]">
                    {component === 'notes' ? (
                        <div className="bg-stone-100 h-full w-full rounded-b-xl text-stone-800 p-4 flex flex-col">
                            <div className="text-md font-bold">My Notes...</div>
                            <textarea
                                // value={thoughts}
                                // onChange={(e) => setThoughts(e.target.value)}
                                className="w-full flex-1 resize-none focus:outline-none"
                                placeholder="Hi! Welcome to Aurora's portfolio! Jot down some of your thoughts here. Don't worry, it'll
                            stay!"
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
