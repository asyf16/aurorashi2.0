'use client';
import { InfiniteMovingCards } from './movingCards';

export default function AwardScroll() {
    const AWARDS = [
        ['Deans List', '2025', "2 times UWaterloo Dean's List, maintaining 4.0 GPA", '/images/awards/wloo.webp'],
        ['Rutherford Scholar', '2024', 'Awarded $2500 for achieving top 10 in Alberta.', '/images/awards/scholar.webp'],
        ['Valedictorian', '2023', 'Graduated with highest average of 99.6% GPA', '/images/awards/val.webp'],
        [
            'Micheal S. Award',
            '2023',
            'Awarded for demonstrating leadership, compassion, and excellence from 10,000 students.',
            '/images/awards/micheal.webp'
        ],
        [
            'P.E.O. Scholar',
            '2023',
            '$2500 scholarship for exceptional women in their final year of high school.',
            '/images/awards/peo.webp'
        ],
        [
            'RIMPAC Finalist',
            '2022',
            'Designed a patch for the 2022 Rim of the Pacific exercise and won silver.',
            '/images/awards/ship.webp'
        ],
        [
            'Skills Canada Finalist',
            '2022',
            'Won bronze for graphic design by creating logos and brochures for a Drone company.',
            '/images/awards/skill.webp'
        ],
        [
            'CyberPatriot Captain',
            '2022',
            'Competed in a national youth cyber education program in the United States.',
            '/images/awards/pat.webp'
        ],
        [
            'Diverse Minds Winner',
            '2021',
            'Won $3000 and published a storybook teaching the concepts of diversity.',
            '/images/awards/bark.webp'
        ],
        [
            'My Money My Future Finalist',
            '2021',
            'Won $2500 by creating a video game to teach students financial skills.',
            '/images/awards/rich.webp'
        ],
        [
            'Gold Key Winner',
            '2021',
            'Created artwork addressing social issues and awarded Regional Finalist and Gold Key.',
            '/images/awards/art.webp'
        ]
    ];

    return (
        <div className="sm:mt-22 sm:mb-26 mt-16 mb-20" id="award">
            <div className="sm:mx-18 mx-8 mb-2">
                <h2>Awards</h2>
                <p>The awards I have received over the past few years showcase both my passions and skills.</p>
            </div>
            <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={AWARDS} />
            </div>
        </div>
    );
}
