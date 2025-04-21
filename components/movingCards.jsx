'use client';

import { cn } from 'lib/utils';
import React, { useEffect, useState } from 'react';
import AwardCard from './awardCard';

export const InfiniteMovingCards = ({ items, className }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });
            setStart(true);
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 w-[95%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 hover:[animation-play-state:paused]',
                    start && 'animate-scroll'
                )}
            >
                {items.map(([title, year, description, image], index) => (
                    <li key={index}>
                        <blockquote>
                            <AwardCard image={image} title={title} description={description} year={year} />
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
