
import type { HeaderProps } from '@/components/organisms/Header/Header.types';

const headerContent: HeaderProps = {
  navItems:  [
    { label: "Sobre Mi", href: "#aboutme" },
    { label: "Full Stack", href: "#fullstack" },
    { label: "Experiencia", href: "#experience" },
    { label: "Otras Habilidades", href: "#Other-Tools" },
    { label: "Contacto", href: "#contact" },
    { label: "CV", href: "/cv.pdf" },
  ],
};

export default headerContent;
