import Hero from './hero/hero';
import About from './about/about';
import Experience from './experience/experience';
import Projects from './projects/projects';
import Portfolio from './portfolio/portfolio';

export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Portfolio />
        </>
    );
}
