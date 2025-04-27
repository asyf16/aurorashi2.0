'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lamp from './lamp';

// Reusable components
const ArtItem = ({ item, index }) => (
  <div className="flex flex-col justify-center items-center mb-16 sm:mb-20" key={index}>
    <Lamp />
    <Image
      alt="Portfolio art"
      src={item[0]}
      width={parseInt(item[1], 10) || 500}
      height={parseInt(item[2], 10) || 500}
      className="border-16 border-black shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out sm:w-auto w-[75%]"
    />
    <div className="flex-flex-col text-center bg-linear-to-t from-gray-300 to-gray-100 rounded-lg text-black sm:mt-6 mt-4 sm:px-6 px-3 sm:py-2 py-1">
      <p className="font-serif italic font-bold sm:text-xl text-sm">{item[3]}</p>
      <p className="sm:text-md text-xs">{item[4]}</p>
    </div>
  </div>
);

const Railing = ({ position }) => (
  <div className={`sm:w-[95%] w-[90%] h-[100px] ${position} bg-transparent flex flex-row justify-between`}>
    <div className="w-full h-[8px] bg-linear-to-r from-[#590a1b] to-[#8a001e] absolute top-[8px]"></div>
    <div className="rounded-lg w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
    <div className="rounded-lg w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
    <div className="rounded-lg w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
    <div className="rounded-lg sm:block hidden w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
    <div className="rounded-lg sm:block hidden w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
    <div className="rounded-lg sm:block hidden w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
    <div className="rounded-lg sm:block hidden w-[8px] h-[100px] bg-linear-to-r from-gray-200 to-[#616161] z-1"></div>
  </div>
);

const SkipButton = ({ position }) => (
  <a href="#award">
    <button className={`z-10 px-4 py-1 ${position} border-[#eae5df] border-2 rounded-4xl font-bold hover:bg-[#eae5df] hover:text-black sm:text-xl text-md`}>
      Skip
    </button>
  </a>
);

const CurtainSet = ({ position }) => (
  <>
    <Image
      alt="Curtain"
      src={'/images/left.webp'}
      width={150}
      height={500}
      className={`h-[100vh] sm:block hidden ${position} left-0 z-2`}
    />
    <Image
      alt="Curtain"
      src={'/images/left.webp'}
      width={150}
      height={500}
      className={`h-[100vh] sm:block hidden ${position} right-0 z-2`}
    />
  </>
);

export default function Portfolio() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('portfolio');
      const rect = element.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ART_ARRAY = [
    ['/images/art/oilpastel.webp', '500', '500', 'Just a Little More', 'Oil Pastel on Paper'],
    ['/images/art/carve.webp', '450', '500', 'Light Addiction', 'Linocut Print on Paper'],
    ['/images/art/enemy.webp', '400', '500', 'Worst Enemy', 'Acylic on Canvas'],
    ['/images/art/judgement.webp', '500', '500', 'Judgement', 'Mixed Media'],
    ['/images/art/fishingart.webp', '400', '500', 'Gone Fishing', 'Yarn on Cardboard'],
    ['/images/art/horseart.webp', '500', '500', 'Inner Beauty', 'Acrylic on Canvas'],
    ['/images/art/man.webp', '400', '500', 'Portrait of a Man', 'Graphite on Paper'],
    ['/images/art/manart.webp', '500', '500', 'Portrait Study', 'Oil on Canvas'],
    ['/images/art/stilllife.webp', '400', '500', 'Still Life Study', 'Graphite on Paper'],
    ['/images/art/parkart.webp', '500', '500', 'Park of the Future', 'Architectural Study']
  ];

  return (
    <div
      className="relative w-[100%] bg-linear-to-r from-transparent via-[#3a355a73] to-transparent flex items-center justify-center flex-col sm:gap-6 gap-1 sm:py-26 py-20"
      id="portfolio"
    >
      <div className="text-center mb-8">
        <h2 className="mb-4 sm:text-3xl text-xl">Aurora&apos;s Museum</h2>
        <div className="sm:w-[600px] w-[240px] sm:text-xl text-sm">
          I love experimenting in all types of media such as oil painting, acrylic, sculpture, block printing,
          and mixed media.
        </div>
      </div>

      {ART_ARRAY.map((item, index) => (
        <ArtItem key={index} item={item} index={index} />
      ))}

      {isFixed ? (
        <>
          <div className="w-full h-[90px] fixed bottom-0 top-[calc(100vh-90px)] bg-noise bg-[#342f52]"></div>
          <Railing position="fixed top-[calc(100vh-150px)]" />
          <SkipButton position="fixed sm:top-[calc(100vh-70px)] top-[calc(100vh-65px)] sm:right-[50px] right-[30px]" />
          <CurtainSet position="fixed top-0" />
        </>
      ) : (
        <>
          <div className="w-full h-[90px] absolute left-0 bottom-0 bg-noise bg-[#342f52]"></div>
          <Railing position="absolute bottom-[50px]" />
          
          <div className="w-full h-[90px] absolute left-0 top-[calc(100vh-90px)] bg-noise bg-[#342f52]"></div>
          <Railing position="absolute top-[calc(100vh-150px)]" />
          
          <SkipButton position="absolute bottom-[30px] sm:right-[50px] right-[30px]" />
          
          <CurtainSet position="absolute top-0" />
          <CurtainSet position="absolute bottom-0" />
        </>
      )}
    </div>
  );
}