import type { ExperienceProps } from "@/components/molecules/Experience/Experience.types";

const experienceContent: ExperienceProps = {
  sectionTitle: 'Experiencia',
  experiences: [
    {
      role: 'Programador Full Stack',
      company: 'Totalrenting',
      duration: '1 año y 2 meses',
      description:
        'Durante este periodo, me enfoqué en el desarrollo de aplicaciones web modernas utilizando tecnologías como Node.js, React, Strapi y Next.js. Participé en el diseño e implementación de nuevas funcionalidades, optimización de rendimiento y mantenimiento de la plataforma.',
    },
    {
      role: 'Prácticas Profesionales',
      company: 'Totalrenting',
      duration: '3 meses',
      description:
        'En mis prácticas iniciales, tuve la oportunidad de trabajar con tecnologías como WordPress y PHP, adquiriendo experiencia en el desarrollo y mantenimiento de sitios web basados en estos sistemas. Esta etapa me proporcionó una base sólida en el desarrollo web.',
    },
  ],
};

export default experienceContent;
