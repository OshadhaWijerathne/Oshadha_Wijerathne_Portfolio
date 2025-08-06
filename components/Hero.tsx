
import React from 'react';
import { YOUR_NAME, HERO_TITLES } from '../constants';
import { AnimatedTitle } from './AnimatedTitle';
import { Section } from './Section';

export const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900/30 !py-0" containerClassName="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          <span className="block text-slate-100">Hi, I'm {YOUR_NAME}.</span>
          <span className="block text-sky-400 mt-4 sm:mt-6 md:mt-8 h-32 sm:h-36 md:h-40">
              I'm a <AnimatedTitle titles={HERO_TITLES} className="inline-block" />
          </span>
        </h1>
        <p className="mt-20 sm:mt-24 md:mt-28 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
          Aspiring AI and Data Science specialist passionate about leveraging machine learning and data-driven techniques to solve real-world problems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-sky-400 hover:bg-sky-500 transition-colors shadow-lg transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-sky-400 text-base font-medium rounded-md text-sky-300 bg-transparent hover:bg-sky-400 hover:text-slate-900 transition-colors shadow-lg transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Section>
  );
};
