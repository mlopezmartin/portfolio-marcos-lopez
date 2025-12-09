
import type { HeaderProps } from '@/components/organisms/Header/Header.types';

const headerContent: HeaderProps = {
  navItems:  [
    { label: "Sobre Mi", href: "#aboutme" },
    { label: "Full Stack", href: "#fullstack" },
    { label: "Experiencia", href: "#experience" },
    { label: "Otras Habilidades", href: "#Other-Tools" },
    { label: "Contacto", href: "#contact" },
    { label: "CV", href: "/assets/pdf/Currículum_Marcos_López_Martín.pdf", download: "Curriculum_Marcos_Lopez_Martin.pdf" },
  ],
};

export default headerContent;
