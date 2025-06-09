// src/components/atoms/SkillsGrouped/SkillsGrouped.tsx
import React from 'react';
import type { SkillsGroupedProps } from './SkillsGrouped.types';


const SkillsGrouped: React.FC<SkillsGroupedProps> = ({ sectionTitle, groups }) => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen bg-[color:var(--color1)] mt-20">
      <div className="max-w-screen-xl mx-auto px-4 py-10 text-[color:var(--neutral1)]">
        <div className="flex items-center justify-center mb-6 gap-2">
          <h2 className="prose prose-strong:text-[color:var(--color4)] text-[color:var(--neutral1)] text-4xl font-bold">
            {sectionTitle}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-[color:var(--color2)] rounded-lg p-6 shadow-md w-full md:w-1/2 max-w-[500px]"
            >
              <h3 className="text-2xl font-semibold text-[color:var(--color3)] mb-4 text-center">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="flex justify-between border-b border-[color:var(--color3)] pb-4">
                    <span className="text-[color:var(--color3)]">{skill.name}</span>
                    <span className="font-bold text-[color:var(--color4)]">{skill.percentage} %</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrouped;
