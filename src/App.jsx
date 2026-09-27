import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Marquee from '@components/Marquee/Marquee';
import Footer from '@components/Footer/Footer';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Experience from '@/sections/Experience/Experience';
import Projects from '@/sections/Projects/Projects';
import Skills from '@/sections/Skills/Skills';
import Beyond from '@/sections/Beyond/Beyond';
import Contact from '@/sections/Contact/Contact';
import useReveal from '@/hooks/useReveal';
import useScrollProgress from '@/hooks/useScrollProgress';
import { profile, navLinks } from '@/data/profile';

function App() {
  const { progress, down, scrolled } = useScrollProgress();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Navbar links={navLinks} brand={profile} hidden={down} solid={scrolled} />
      <main id="main">
        <Hero />
        <About />
        <Marquee items={['Python', 'TypeScript', 'Java', 'React', 'Flask', 'Spring Boot', 'SQL', 'AWS']} accent reverse />
        <Experience />
        <Projects />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer name={`${profile.firstName} ${profile.lastName}`} />
    </>
  );
};

export default App;
