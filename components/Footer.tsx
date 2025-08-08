
import React from 'react';
import { SOCIAL_LINKS, YOUR_NAME } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map(social => (
             social.name !== 'Email' && // Don't repeat email icon if it's prominent in contact
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              <social.Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-400">
          &copy; {currentYear} {YOUR_NAME}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
