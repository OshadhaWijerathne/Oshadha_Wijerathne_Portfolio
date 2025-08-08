
import React from 'react';
import { Section } from './Section';
import { SOCIAL_LINKS, YOUR_EMAIL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-slate-800">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-slate-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        <a
          href={`https://drive.usercontent.google.com/u/0/uc?id=1Rtl9vEXLrjQ8QiMtRQQVCoRzm276Fmh0&export=download`}
          className="inline-block mb-10 px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-sky-400 hover:bg-sky-500 transition-colors shadow-lg transform hover:scale-105"
        >
          Download My Resume
        </a>
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map(social => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              <social.Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
