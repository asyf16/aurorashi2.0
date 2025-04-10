'use client';
import { FastForward } from 'lucide-react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function Page() {
    const { RiveComponent } = useRive({
        src: '/images/space.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
        artboard: 'Artboard',
        layout: new Layout({
            fit: Fit.Fill,
            alignment: Alignment.TopCenter
        })
    });

    return (
        <>
            <div className="h-screen w-screen bg-[#04020e]">
                <RiveComponent />
            </div>
            <div className="h-screen w-screen absolute flex flex-col absolute top-0 justify-center items-center text-[#e6e6e6]">
                <div className="font-serif italic sm:text-[20px] text-[14px] mb-4">Artist · Designer · Developer</div>
                <div className="flex flex-col items-center font-heading sm:text-[90px] md:text-[110px] text-[50px] leading-[50px] md:leading-[110px] sm:leading-[90px]">
                    <div className="text-[#e6e6e670]">AURORA Shi</div>
                    <div className="group flex flex-row items-center justify-center">
                        <div className="sm:text-[100px] md:text-[130px] text-[60px] sm:group-hover:translate-x-[-50px] transition-translate duration-300">
                            AURORA Shi
                        </div>
                        <div className="group hidden group-hover:flex duration-300 translate-x-[-30px] translate-y-[10px]">
                            <FastForward className="w-[80px] h-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                    <div className="text-[#e6e6e670]">AURORA Shi</div>
                </div>
                <div className="font-serif italic sm:text-[20px] text-[14px] mt-6">Software Engineering Student</div>
                <div className="font-serif italic sm:text-[20px] text-[14px]">University of Waterloo</div>
            </div>
        </>
    );
}
