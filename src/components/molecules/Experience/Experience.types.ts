
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ExperienceProps {
  sectionTitle: string;
  experiences: ExperienceItem[];
}
