
import React from 'react';
import { Section } from './Section';
import { PROJECTS_DATA } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects" className="bg-slate-800">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
