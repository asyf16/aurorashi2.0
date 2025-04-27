import { Wifi, BatteryFull, Bluetooth, EllipsisVertical, Search, AppleIcon } from 'lucide-react';
import { useTime } from 'hooks/useTime';

export default function ToolBar() {
    const {currentTime, currentDate} = useTime()

    return (
            <div className="w-[100%] h-[35px] absolute top-0 left-0 bg-[#171f2bB3] backdrop-blur-md flex justify-between items-center px-2 text-white text-sm">
                <div className="flex items-center space-x-3 ml-2">
                    <AppleIcon className="w-4 h-4" />
                    <div className="font-bold">Finder</div>
                    <div>File</div>
                    <div>Edit</div>
                    <div>View</div>
                    <div className="md:flex hidden">Go</div>
                    <div className="md:flex hidden">Window</div>
                    <div className="md:flex hidden">Help</div>
                </div>

                <div className="flex items-center space-x-3 mr-2">
                    <BatteryFull className="w-4 h-4" />

                    <Wifi className="w-4 h-4" />

                    <Bluetooth className="w-4 h-4" />

                    <EllipsisVertical className="w-4 h-4" />

                    <Search className="w-4 h-4" />

                    <div className="flex items-center font-bold">
                        <span>{currentDate}</span>
                        <span className="ml-2">{currentTime}</span>
                    </div>
                </div>
            </div>
    );
}
