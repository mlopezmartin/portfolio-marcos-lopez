export  interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillsProps {
  title: string;
  skills: Skill[];
}
