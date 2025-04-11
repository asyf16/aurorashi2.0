import Image from 'next/image';

export default function AwardCard({ image, title, year, description }) {
    return (
        <div className="flex items-center justify-between bg-[#5a507e] rounded-2xl shadow-md sm:h-[150px] h-[130px]
">
            <div className="w-[100px] sm:w-[120px] h-full relative">
                <Image src={image} alt="Award Picture" layout="fill" objectFit="cover" className="rounded-tl-2xl rounded-bl-2xl" />
            </div>

            <div className="w-[150px] sm:w-[190px] pl-4 pr-3 flex flex-col">
                <h3 className="sm:text-md text-sm font-serif italic font-bold">{title}</h3>
                <div className="w-full">
                    <p className="sm:text-sm text-xs text-white">
                        {year} - {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
