// src/components/atoms/Skills/Skills.tsx
import React from 'react';
import type { SkillsProps } from './Skills.types';
import Button from '@/components/atoms/Button/Button';


const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen bg-[color:var(--color2)] mt-20">
  <div className="max-w-screen-xl mx-auto px-4 py-10 text-[color:var(--neutral1)]">
        <div className="flex items-center justify-center mb-6 gap-2">
          <h2 className="prose prose-strong:text-[color:var(--color4)] text-[color:var(--neutral1)] text-4xl md:text-4xl font-bold"  dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Button
              obfuscate
              key={index}
              rounded="rounded-full"
              rel="noopener noreferrer"
              variant="primary"
              className="font-bold"
            >
              {skill.icon}
              {skill.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
