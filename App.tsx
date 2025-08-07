
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
};

export default App;
