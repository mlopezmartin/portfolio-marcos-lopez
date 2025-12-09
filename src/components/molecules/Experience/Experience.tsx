// src/components/molecules/Experience/Experience.tsx
import React from "react";
import type { ExperienceProps } from "./Experience.types";
/* import styles from './Experience.module.css'; */

const Experience: React.FC<ExperienceProps> = ({
  sectionTitle,
  experiences,
}) => {
  return (
    <section
      id="experience"
      className={` relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen bg-[color:var(--color2)] mt-20`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-10 text-[color:var(--neutral1)]">
        <div className="flex items-center justify-center mb-6 gap-2">
          <h2 className="text-4xl font-bold text-[color:var(--color3)]">
            {sectionTitle}
          </h2>
        </div>

        <div className={` flex flex-col gap-6 items-center`}>
          {experiences.map((item, index) => (
            <div
              key={index}
              className={` bg-[color:var(--color1)] rounded-lg p-6 shadow-md w-full max-w-[700px] min-h-[220px]`}
            >
              <h3 className="text-xl font-bold text-[color:var(--color3)] mb-1">
                {item.role}
              </h3>
              <p className="text-[color:var(--color3)]">{item.company}</p>
              <p className="italic text-sm text-[color:var(--color4)] mb-3">
                {item.duration}
              </p>
              <p className="text-[color:var(--color3)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
