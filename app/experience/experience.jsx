import Image from 'next/image';
import { Timeline } from 'components/Timeline';
import { ExperienceCard } from 'components/experienceCard';

function OrganizationCard({ organization }) {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-linear-to-t from-[#2d2247]/60 via-[#2d2247]/20 to-black transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
            <a
                href={organization.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-40 overflow-hidden cursor-pointer"
            >
                <Image
                    src={organization.cover.src}
                    alt={organization.cover.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-[#0a0714]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-end gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/15 bg-[#0a0714] shadow-xl">
                        <Image src={organization.logo.src} alt={organization.logo.alt} fill className="object-cover" />
                    </div>
                </div>
            </a>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold tracking-tight text-[#f2eef8]">{organization.name}</h3>
                <p className="mt-1 flex flex-wrap items-baseline gap-x-2 font-serif text-sm font-bold italic text-[#d1c8ff]">
                    <span>{organization.role}</span>
                    <span className="font-sans text-xs font-bold not-italic text-gray-500">
                        · {organization.term}
                    </span>
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white">{organization.description}</p>
            </div>
        </article>
    );
}

export default function Experience() {
    const data = [
        {
            title: '2026',
            subtitle: 'May - Aug',
            content: (
                <ExperienceCard
                    company="Rippling"
                    role="Software Engineer"
                    location="San Francisco"
                    description={
                        <>
                            Building an <span className="font-serif font-bold italic">Undo Termination</span> feature
                            with <span className="font-serif font-bold italic">Python, MongoDB, and Typescript </span>
                            to restore incorrectly terminated employees, resolving a <span className="font-serif font-bold italic">$5.7M ARR</span> payroll and benefits issue.
                        </>
                    }
                    images={[
                        { src: '/images/rippling1.webp', alt: 'Rippling Logo' },
                        { src: '/images/rippling2.jpg', alt: 'Rippling Logo' }
                    ]}
                />
            )
        },
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
                            Engineered a <span className="font-serif font-bold italic">data-exploration</span> platform
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
        }
    ];

    const organizations = [
        {
            name: 'Waterloo Quant Club',
            role: 'VP of Technology',
            location: 'Waterloo',
            term: '2025 - Present',
            link: "https://waterlooquantclub.com/",
            date: 'Current',
            description:
                "Co-founded the club, organized Canada's first international trading competition, and built trading infrastructure and games with Rust and TypeScript.",
            cover: { src: '/images/trading_comp.JPG', alt: 'Waterloo Quant Club trading competition' },
            logo: { src: '/images/WQC.jpg', alt: 'Waterloo Quant Club logo' }
        },
        {
            name: 'Hack the 6ix',
            role: 'Web Developer',
            location: 'Toronto',
            link: "https://hackthe6ix.com/",
            term: '2024 - 2025',
            date: 'Volunteer',
            description:
                "Built the admin dashboard and attendee site for Toronto's largest summer hackathon, supporting 1,000+ users and event logistics.",
            cover: { src: '/images/6ixpage.jpg', alt: 'Hack the 6ix website' },
            logo: { src: '/images/6ixlogo.jpg', alt: 'Hack the 6ix logo' }
        },
        {
            name: 'WatStreet',
            role: 'Frontend Developer',
            location: 'Waterloo',
            link: "https://watstreet.netlify.app/",
            term: '2024 - 2025',
            date: 'Club',
            description:
                'Developed an options strategy builder for stock profit analysis and a ledger dashboard for viewing holdings and transactions.',
            cover: { src: '/images/ledger.webp', alt: 'WatStreet ledger dashboard' },
            logo: { src: '/images/watstreet.webp', alt: 'WatStreet logo' }
        }
    ];

    return (
        <div className="relative w-full overflow-clip bg-linear-to-b from-[#1c192a99] to-[#04020e]" id="experience">
            <Timeline data={data} />

            <section className="bg-black mx-auto max-w-7xl px-6 mt-24 sm:px-16" aria-labelledby="organizations-heading">
                <div className="mb-8 max-w-4xl sm:mb-10">
                    <h2 id="organizations-heading">Clubs + Organizations</h2>
                    <p className="mt-2 text-sm leading-relaxed sm:text-lg">
                        Outside of internships, I love building with{' '}
                        <span className="font-serif font-bold italic">student-led communities</span>. These organizations
                        have given me opportunities to <span className="font-serif font-bold italic">lead teams</span>,
                        support large events, and turn ambitious ideas into useful products.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-8 sm:mt-12">
                    {organizations.map((organization) => (
                        <OrganizationCard key={organization.name} organization={organization} />
                    ))}
                </div>
            </section>
        </div>
    );
}
