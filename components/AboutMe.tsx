
import React from 'react';
import { Section } from './Section';
import { YOUR_NAME } from '../constants';

export const AboutMe: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-slate-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <img 
            src={'/images/Oshadha.jpg'} // Replace with your image path
            alt={YOUR_NAME}
            className="rounded-lg shadow-2xl mx-auto w-64 h-64 md:w-full md:h-auto object-cover" 
          />
        </div>
        <div className="md:col-span-2 text-slate-300 space-y-6 text-lg">
          <p>
            Hello! I'm {YOUR_NAME},a passionate and results-driven Computer Science and Engineering graduate with a strong foundation in Data Science,Machine Learning, and AI. My journey into technology began with a fascination for how data can be used to solve real-world problems and uncover meaningful insights.
          </p>
          <p>
            With a solid foundation in machine learning, statistical modeling, and full-stack development, I love turning complex ideas into clean, scalable, and intelligent systems. I'm equally excited about building end-to-end AI and machine learning solutions, whether it’s creating multi-agent systems with LLMs or developing predictive models to classify data and make forecasts.          </p>
          <p>
            I thrive in fast-paced environments and constantly challenge myself to learn, grow, and stay ahead of the tech curve.
          </p>
        </div>
      </div>
    </Section>
  );
};
