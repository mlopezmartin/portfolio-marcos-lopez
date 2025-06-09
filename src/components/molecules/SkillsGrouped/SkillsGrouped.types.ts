type SkillGroup = {
  title: string;
  skills: { name: string; percentage: number }[];
};

export interface SkillsGroupedProps {
  sectionTitle: string;
  groups: SkillGroup[];
}