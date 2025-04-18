import Image from 'next/image';

export function ExperienceCard({ company, role, location, description, images }) {
    return (
      <div>
        <div className="flex flex-row justify-between sm:mb-4 mb-3 items-center">
          <p className="font-bold text-md md:text-xl">
            {company} <span className="font-normal italic text-gray-300"> - {role}</span>
          </p>
          <p className="sm:flex hidden text-gray-500 md:text-lg font-bold italic">{location}</p>
        </div>
        <p className="sm:mb-8 mb-4 text-xs md:text-[16px]">{description}</p>
  
        {images && (
          <div className="flex flex-row sm:gap-6 gap-2 w-full">
            {images.map((img, i) => (
              <div key={i} className="w-1/2 aspect-[3/2] relative shadow-lg shadow-[#412e8233] rounded-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover rounded-md" />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }