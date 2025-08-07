
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
};

export default App;
