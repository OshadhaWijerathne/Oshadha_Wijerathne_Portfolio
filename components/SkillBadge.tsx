
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex items-center space-x-2 bg-slate-700 p-3 rounded-lg shadow-md hover:shadow-sky-500/30 transition-shadow duration-300">
      {skill.Icon && <skill.Icon className="w-6 h-6 text-sky-400" />}
      <span className="text-slate-200 font-medium">{skill.name}</span>
    </div>
  );
};
