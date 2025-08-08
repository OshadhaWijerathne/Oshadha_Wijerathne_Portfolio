
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </>
  );
};

export default App;
