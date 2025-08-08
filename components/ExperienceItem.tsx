
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Vertical line */}
      <div className="absolute left-0 sm:left-2.5 top-0 bottom-0 w-0.5 bg-slate-700 group-hover:bg-sky-500 transition-colors duration-300"></div>
      {/* Dot */}
      <div className="absolute left-[-4px] sm:left-0 top-7 w-5 h-5 rounded-full bg-slate-600 border-4 border-slate-800 group-hover:bg-sky-400 group-hover:border-sky-600 transition-all duration-300"></div>
      
      <div className="flex items-start mb-1">
        {experience.logoUrl && (
          <img src={experience.logoUrl} alt={`${experience.company} logo`} className="w-10 h-10 rounded-full mr-4 hidden sm:block" />
        )}
        <div>
          <h3 className="text-xl font-semibold text-sky-400">{experience.role}</h3>
          <p className="text-md text-slate-300">{experience.company}</p>
          <p className="text-sm text-slate-400">{experience.duration}</p>
        </div>
      </div>
      <ul className="list-disc list-outside ml-5 space-y-1 text-slate-300 text-sm">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};
