import type { SkillsGroupedProps } from "@/components/molecules/SkillsGrouped/SkillsGrouped.types";

const skillsGroupedContent: SkillsGroupedProps = {
  sectionTitle: '⭐ Habilidades',
  groups: [
    {
      title: 'Profesional',
      skills: [
        { name: 'Metodología Agile', percentage: 100 },
        { name: 'Front-end developer', percentage: 90 },
        { name: 'AngularJS, NodeJS, Front Frameworks', percentage: 90 },
        { name: 'Back-end developer', percentage: 80 },
        { name: 'J2EE, Spring, Oracle', percentage: 80 },
      ],
    },
    {
      title: 'Personal',
      skills: [
        { name: 'Compromiso', percentage: 100 },
        { name: 'Creatividad', percentage: 90 },
        { name: 'Liderazgo', percentage: 80 },
        { name: 'Comunicación', percentage: 85 },
        { name: 'Capacidad analítica', percentage: 80 },
      ],
    },
  ],
};

export default skillsGroupedContent;
