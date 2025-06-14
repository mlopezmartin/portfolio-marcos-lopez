import type { SkillsGroupedProps } from "@/components/molecules/SkillsGrouped/SkillsGrouped.types";

const skillsGroupedContent: SkillsGroupedProps = {
  sectionTitle: 'Skills',
  groups: [
    {
      title: 'Professional',
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
        { name: 'Commitment', percentage: 100 },
        { name: 'Creativity', percentage: 90 },
        { name: 'Leadership', percentage: 95 },
        { name: 'Communication', percentage: 90 },
        { name: 'Analytical thinking', percentage: 90 },
      ],
    },
  ],
};

export default skillsGroupedContent;
