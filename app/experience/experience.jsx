import { Timeline } from 'components/Timeline';
import { ExperienceCard } from 'components/experienceCard';

export default function Experience() {
    const data = [
                {
            title: '2025',
            subtitle: 'Sep - Dec',
            content: (
                <ExperienceCard
                    company="Bloomberg LP"
                    role="Software Engineer"
                    location="New York"
                    description={
                        <>
                            Engineering a <span className="font-serif font-bold italic">data-exploration</span> platform
                            with <span className="font-serif font-bold italic">Apache Spark, Iceberg, Amazon S3, and Trino</span>, 
                            allowing clients to perform complex SQL queries over <span className="font-serif font-bold italic">80Tb+ </span>
                            of time-series data.
                        </>
                    }
                    images={[
                        { src: '/images/trino.png', alt: 'Software logos' },
                        { src: '/images/bloombergfancy.webp', alt: 'Bloomberg' }
                    ]}
                />
            )
        },
        {
            title: '2025',
            subtitle: 'Jan - May',
            content: (
                <ExperienceCard
                    company="Bloomberg LP"
                    role="Software Engineer"
                    location="New York"
                    description={
                        <>
                            Developed <span className="font-serif font-bold italic">WYSIWYG editor</span> enabling
                            designers to create and deploy custom paywalls to
                            <span className="font-serif font-bold italic"> Bloomberg.com</span> without code, reducing
                            engineering overhead by <span className="font-serif font-bold italic">80%</span> and
                            eliminating 5+ feedback cycles between teams.
                        </>
                    }
                    images={[
                        { src: '/images/bloomberg.webp', alt: 'Bloomberg logo' },
                        { src: '/images/paywall.webp', alt: 'Article Paywall' }
                    ]}
                />
            )
        },
        {
            title: '2024-25',
            subtitle: 'Aug-Aug',
            content: (
                <ExperienceCard
                    company="WatStreet"
                    role="Frontend Developer"
                    location="Waterloo"
                    description={
                        <>
                            Developed <span className="font-serif font-bold italic">Options Strategy Builder</span> to
                            create complex strategies for stock profit analysis and
                            <span className="font-serif font-bold italic">Ledger Dashboard </span> to view holdings and
                            ledgers.
                        </>
                    }
                    images={[
                        { src: '/images/ledger.webp', alt: 'Ledger Dashboard' },
                        { src: '/images/watstreet.webp', alt: 'Watstreet' }
                    ]}
                />
            ),
            
        },
        {
            title: '2024-25',
            subtitle: 'Nov - Aug',
            content: (
                <ExperienceCard
                    company="Hack the 6ix"
                    role="Web Developer"
                    location="Toronto"
                    description={
                        <>
                            Developing admin dashboard and hacker landing page with{' '}
                            <span className="font-serif font-bold italic">1000+ users</span> for Toronto&apos;s largest
                            summer hackathon to mange{' '}
                            <span className="font-serif font-bold italic"> user applications</span> and{' '}
                            <span className="font-serif font-bold italic">event logistics.</span>
                        </>
                    }
                    images={[
                        { src: '/images/6ixlogo.jpg', alt: 'Hack the 6ix Logo' },
                        { src: '/images/6ixpage.jpg', alt: 'Hack the 6ix Website' }
                    ]}
                />
            )
        },
        {
            title: '2024',
            subtitle: 'May - Aug',
            content: (
                <ExperienceCard
                    company="ISARA Corp."
                    role="Software Developer"
                    location="Waterloo"
                    description={
                        <>
                            Redesigned core application&apos;s cryptographic risk scoring process, enhancing risk assessment
                            accuracy by <span className="font-serif font-bold italic">80%</span> and increasing speed
                            from <span className="font-serif font-bold italic">40 min to 17 min</span>.
                        </>
                    }
                    images={[
                        { src: '/images/advance.jpg', alt: 'ISARA Advance' },
                        { src: '/images/isara.jpg', alt: 'ISARA Logo' }
                    ]}
                />
            )
        },
        {
            title: '2024',
            subtitle: 'Jan - Apr',
            content: (
                <ExperienceCard
                    company="CaseMining"
                    role="Web Developer"
                    location="Edmonton"
                    description={
                        <>
                            Developed company website showcasing services, information, and user-friendly contact page
                            using React, implemented edits tailored to client specifications and feedback.
                        </>
                    }
                />
            )
        }
    ];

    return (
        <div className="relative w-full overflow-clip bg-linear-to-b from-[#1c192a99] to-[#04020e]" id="experience">
            <Timeline data={data} />
        </div>
    );
}
