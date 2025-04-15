'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Parallax() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(section);
        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        function parallaxControl() {
            const sectionRect = sectionRef.current?.getBoundingClientRect();
            if (!sectionRect) return;

            if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                const scrollPosition = -sectionRect.top;

                const bird = document.getElementById('bird');
                const hill1 = document.getElementById('hill1');
                const hill2 = document.getElementById('hill2');
                const hill3 = document.getElementById('hill3');
                const hill4 = document.getElementById('hill4');

                if (bird) bird.style.left = scrollPosition * 0.5 + 'px';
                if (bird) bird.style.top = scrollPosition * -0.4 + 'px';
                if (hill1) hill1.style.top = scrollPosition * 0.7 >= 0 ? scrollPosition * 0.7 + 'px' : '0px';
                if (hill2) hill2.style.left = scrollPosition * -0.8 <= 0 ? scrollPosition * -0.8 + 'px' : '0px';
                if (hill3) hill3.style.left = scrollPosition * 0.6 >= 0 ? scrollPosition * 0.6 + 'px' : '0px';
                if (hill4) hill4.style.left = scrollPosition * 0.8 >= 0 ? scrollPosition * 0.8 + 'px' : '0px';
            }
        }

        window.addEventListener('scroll', parallaxControl);

        parallaxControl();

        return () => {
            window.removeEventListener('scroll', parallaxControl);
        };
    }, [isVisible]);

    return (
        <div id="projects">
            <section
                ref={sectionRef}
                className="mt-[60px] relative flex justify-center items-center h-[55vw] overflow-hidden"
            >
                <Image
                    alt="Parallax"
                    src={'/images/parallax/bg.webp'}
                    width={500}
                    height={500}
                    className="h-full w-full absolute top-0 left-0 z-[500]"
                    id="hill1"
                />
                <Image
                    alt="Parallax"
                    src={'/images/parallax/ml.webp'}
                    width={500}
                    height={500}
                    className="h-full w-full absolute top-0 left-0 z-[501]"
                    id="hill2"
                />
                <Image
                    alt="Parallax"
                    src={'/images/parallax/mr.webp'}
                    width={500}
                    height={500}
                    className="h-full w-full absolute top-0 left-0 z-[502]"
                    id="hill3"
                />
                <Image
                    alt="Parallax"
                    src={'/images/parallax/fr.webp'}
                    width={500}
                    height={500}
                    className="h-full w-full absolute top-0 left-0 z-[503]"
                    id="hill4"
                />
                <Image
                    alt="Parallax"
                    src={'/images/parallax/bird.webp'}
                    width={500}
                    height={500}
                    className="h-full w-full absolute top-0 left-0 z-[504]"
                    id="bird"
                />

                <Image
                    alt="Parallax"
                    src={'/images/parallax/fg.webp'}
                    width={500}
                    height={500}
                    className="h-full w-full absolute top-0 left-0 z-[505]"
                />
                <h1 className="text-glow absolute text-white font-serif italic font-bold text-4xl sm:text-7xl font-bold z-[506]">Projects</h1>
            </section>
        </div>
    );
}
