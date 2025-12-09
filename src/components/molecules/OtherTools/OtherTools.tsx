// src/components/molecules/OtherTools/OtherTools.tsx
import React from "react";
import type { OtherToolsProps } from "./OtherTools.types";
import Button from "@/components/atoms/Button/Button";
/* import styles from "./OtherTools.module.css"; */
import { IconSuitcase } from "@/components/organisms/Icons";

const OtherTools: React.FC<OtherToolsProps> = ({ sectionTitle, groups }) => {
  return (
    <section
      id="Other-Tools"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen bg-[color:var(--color1)] mt-20"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-10 text-[color:var(--neutral1)]">
        <div className="flex items-center justify-center mb-6 gap-2">
          <IconSuitcase color={"var(--color4)"} width={40} height={40} />
          <h2 className="text-4xl font-bold text-[color:var(--color3)]">
            {sectionTitle}
          </h2>
        </div>

        <div className={` flex flex-col gap-8`}>
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-[color:var(--color2)] rounded-lg p-6 shadow-md w-full flex flex-col items-center gap-4"
            >
              <h3 className="text-2xl font-semibold text-center text-[color:var(--color3)]">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {group.tools.map((tool, i) => (
                  <Button
                    obfuscate
                    key={index}
                    rounded="rounded-full"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="font-bold"
                  >
                    {tool.icon}
                    {tool.name}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTools;
