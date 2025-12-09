
import type { HeaderProps } from '@/components/organisms/Header/Header.types';

const headerContent: HeaderProps = {
    navItems: [
        { label: "About Me", href: "#aboutme" },
        { label: "Full Stack", href: "#fullstack" },
        { label: "Experience", href: "#experience" },
        { label: "Other Skills", href: "#Other-Tools" },
        { label: "Contact", href: "#contact" },
        { label: "CV", href: "/assets/pdf/Currículum_Marcos_López_Martín.pdf", download: "Curriculum_Marcos_Lopez_Martin.pdf" },
    ],
};

export default headerContent;
