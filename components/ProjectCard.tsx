import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-sky-500/40 hover:transform hover:-translate-y-1">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-sky-400 mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-slate-700 text-sky-300 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-slate-700">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors text-sm"
              title="View Live Demo"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors text-sm"
              title="View Source Code"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Source Code</span>
            </a>
          )}
          {project.datasetLink && (
            <a
              href={project.datasetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors text-sm"
              title="View Dataset"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Dataset</span>
            </a>
          )}
          {project.videoLink && (
            <a
              href={project.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors text-sm"
              title="Watch Video"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Video</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
