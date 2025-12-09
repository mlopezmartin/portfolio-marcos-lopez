
import type { HeaderProps } from '@/components/organisms/Header/Header.types';

const headerContent: HeaderProps = {
    navItems: [
        { label: "About Me", href: "#aboutme" },
        { label: "Full Stack", href: "#fullstack" },
        { label: "Experience", href: "#experience" },
        { label: "Other Skills", href: "#Other-Tools" },
        { label: "Contact", href: "#contact" },
        { label: "CV", href: "/cv.pdf" },
    ],
};

export default headerContent;
