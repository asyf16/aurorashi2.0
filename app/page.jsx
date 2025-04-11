import Hero from './hero/hero';
import About from './about/about';
import Experience from './experience/experience';
import Projects from './projects/projects';
import Portfolio from './portfolio/portfolio';
import AwardScroll from 'components/awardScroll';
import Footer from 'components/footer';

export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Portfolio />
            <AwardScroll />
            <Footer />
        </>
    );
}
