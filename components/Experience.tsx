
import React from 'react';
import { Section } from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { ExperienceItem } from './ExperienceItem';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
};
