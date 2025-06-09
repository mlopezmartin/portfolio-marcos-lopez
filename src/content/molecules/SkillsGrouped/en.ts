import type { SkillsGroupedProps } from "@/components/molecules/SkillsGrouped/SkillsGrouped.types";

const skillsGroupedContent: SkillsGroupedProps = {
  sectionTitle: '⭐ Skills',
  groups: [
    {
      title: 'Professional',
      skills: [
        { name: 'Agile Methodology', percentage: 100 },
        { name: 'Front-end developer', percentage: 90 },
        { name: 'AngularJS, NodeJS, Front Frameworks', percentage: 90 },
        { name: 'Back-end developer', percentage: 80 },
        { name: 'J2EE, Spring, Oracle', percentage: 80 },
      ],
    },
    {
      title: 'Personal',
      skills: [
        { name: 'Commitment', percentage: 100 },
        { name: 'Creativity', percentage: 90 },
        { name: 'Leadership', percentage: 80 },
        { name: 'Communication', percentage: 85 },
        { name: 'Analytical thinking', percentage: 80 },
      ],
    },
  ],
};

export default skillsGroupedContent;
