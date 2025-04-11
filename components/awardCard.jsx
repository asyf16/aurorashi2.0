import Image from 'next/image';

export default function AwardCard({ image, title, year, description }) {
    return (
        <div className="flex items-center ml-3 justify-between bg-[#5a507e] rounded-2xl shadow-md sm:h-[160px] h-[130px]">
            <div className="w-[120px] h-full relative">
                <Image src={image} alt="Award Picture" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>

            <div className="w-[200px] px-3 flex flex-col">
                <h3 className="text-sm font-serif italic">{title}</h3>
                <div className="w-full">
                    <p className="text-xs text-white">
                        {year} - {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
