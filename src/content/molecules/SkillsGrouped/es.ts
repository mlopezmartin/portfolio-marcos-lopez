import type { SkillsGroupedProps } from "@/components/molecules/SkillsGrouped/SkillsGrouped.types";

const skillsGroupedContent: SkillsGroupedProps = {
  sectionTitle: 'Habilidades',
  groups: [
    {
      title: 'Profesional',
      skills: [
        { name: 'Metodología Agile', percentage: 100 },
        { name: 'Front-end developer', percentage: 90 },
        { name: 'NextJs, NodeJS, Front Frameworks', percentage: 90 },
        { name: 'Back-end developer', percentage: 85 },
        { name: 'APIs RESTful, Autenticación JWT, ORMs', percentage: 85 },
      ],
    },
    {
      title: 'Personal',
      skills: [
        { name: 'Compromiso', percentage: 100 },
        { name: 'Creatividad', percentage: 90 },
        { name: 'Liderazgo', percentage: 95 },
        { name: 'Comunicación', percentage: 90},
        { name: 'Capacidad analítica', percentage: 90 },
      ],
    },
  ],
};

export default skillsGroupedContent;
