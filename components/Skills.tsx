
import React from 'react';
import { Section } from './Section';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';
import { SkillBadge } from './SkillBadge';

const skillCategories = Array.from(new Set(SKILLS_DATA.map(skill => skill.category))).sort();

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="space-y-12">
        {skillCategories.map(category => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-slate-300 mb-6 text-center md:text-left">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {SKILLS_DATA
                .filter((skill: Skill) => skill.category === category)
                .map((skill: Skill) => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
