import type { HeroProps } from "@/components/molecules/Hero/Hero.types";
import { IconGithub, IconPdf } from "@/components/organisms/Icons";
import LinkedinIcon from "@/components/organisms/Icons/Svg/Linkedin";

const heroContent: HeroProps = {
    name: 'Marcos Lopez',
    subtitle: 'Desarrollador Web Full Stack',
    email: 'marcos.lopez@example.com',
    avatarUrl: '/assets/img/logo.jpeg',
    socialLinks: [
        { label: 'Curriculum', href: '/cv.pdf', variant: 'primary', icon: <IconPdf/> },
        { label: 'Linkedin', href: 'https://www.linkedin.com/in/marcos-lopez-7890ba184/', variant: 'secondary', icon: <LinkedinIcon/> },
        { label: 'GitHub', href: 'https://github.com/mlopezmartin', variant: 'secondary', icon: <IconGithub/> }
    ]
};

export default heroContent;
