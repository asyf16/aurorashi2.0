import Hero from './hero/hero';
import Navbar from 'components/navbar';
import About from './about/about';
import Experience from './experience/experience';
import Projects from './projects/projects';
import Parallax from './projects/parallax';
import Portfolio from './portfolio/portfolio';
import AwardScroll from 'components/awardScroll';
import Footer from 'components/footer';

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Parallax />
            <Projects />
            <Portfolio />
            <AwardScroll />
            <Footer />
        </>
    );
}
