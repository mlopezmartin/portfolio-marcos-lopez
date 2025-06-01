import type { SkillsProps } from '@/components/molecules/Skills/Skills.types';
import { IconClose } from '@/components/organisms/Icons';

const skillsContent: SkillsProps = {
  title: "Mis Habilidades <strong> Full Stack </strong>",
  skills: [
    { name: "AngularJS", icon: <IconClose /> },
    { name: "React", icon: <IconClose /> },
  ]
};

export default skillsContent;
