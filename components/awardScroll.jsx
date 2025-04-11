'use client';
import AwardCard from './awardCard';

export default function AwardScroll() {
    const AWARDS = [
        ['Deans List', '2025', "2 times UWaterloo Dean's List, maintaining 4.0 GPA", "/images/deans-list.png"],
        ['Rutherford Scholar', '2024', 'Awarded $2500 for achieving top 10 in Alberta based on results obtained on graduating Diploma Examinations.', '/images/rutherford.png'],
        ['Valedictorian', '2023', "Graduated with highest average of 99.6% GPA", "/images/valedictorian.png"],
        ['Micheal S. Award', '2023', 'Awarded for demonstrating leadership, compassion, and excellence from 10,000 students.', '/images/strembitsky.png'],
        ['P.E.O. Scholar', '2023', 'A $2500 scholarship for exceptional women in their final year of high school to attend an accredited postsecondary institution.', '/images/peo-star.png'],
        ['RIMPAC Finalist', '2022', 'Designed a patch for the 2022 Rim of the Pacific exercise and won silver.', '/images/rimpac.png'],
        ['Skills Canada Finalist', '2022', 'Won bronze for graphic design by creating logos, brochures, and other designs for a Drone company.', '/images/skills-canada.png'],
        ['CyberPatriot Captain', '2022', 'Competed in a national youth cyber education program in the United States.', '/images/cyberpatriot.png'],
        ['Diverse Minds Winner', '2021', 'Won $3000 and published a storybook teaching the concepts of diversity.', '/images/diverse-minds.png'],
        ['My Money My Future Finalist', '2021', 'Won $2500 by creating an interactive video game to teach students financial skills.', '/images/money-future.png'],
        ['Gold Key Winner', '2021', 'Created artwork addressing social issues and awarded a Regional Finalist and Gold Key.', '/images/american-visions.png']
    ];

    return (
        <div className="overflow-x-hidden py-6 py-16">
            <div className="award-scroll-container flex gap-8 animate-scroll">
                {AWARDS.concat(AWARDS).map(([title, year, description, image], index) => (
                    <AwardCard
                        key={index}
                        image={image}
                        title={title}
                        description={description}
                        year={year}
                    />
                ))}
            </div>
        </div>
    );
}
