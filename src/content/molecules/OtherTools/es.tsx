import type { OtherToolsProps } from "@/components/molecules/OtherTools/OtherTools.types";
import {
  IconAdobexd,
  IconClose,
  IconCpanel,
  IconDocker,
  IconFtp,
  IconGit,
  IconGithub,
  IconIllustrator,
  IconJira,
  IconNotion,
  IconPhotoshop,
  IconPlesk,
  IconPostman,
  IconStorybook,
  IconStrapi,
  IconVsCode,
  IconWordpress,
} from "@/components/organisms/Icons";

const otherToolsContent: OtherToolsProps = {
  sectionTitle: "Otras Herramientas",
  groups: [
    {
      title: "Herramientas para Desarrollador",
      tools: [
        { name: "WordPress", icon: <IconWordpress /> },
        { name: "Strapi", icon: <IconStrapi widht={20} height={20} /> },
        { name: "Storybook", icon: <IconStorybook /> },
        { name: "Postman", icon: <IconPostman widht={20} height={20} /> },
        { name: "FTP Clients", icon: <IconFtp /> },
        { name: "Github", icon: <IconGithub /> },
        { name: "Git", icon: <IconGit /> },
        { name: "Jira", icon: <IconJira widht={20} height={20} /> },
        { name: "Notion", icon: <IconNotion /> },
        { name: "Vscode", icon: <IconVsCode /> },
        { name: "Docker", icon: <IconDocker /> },
        { name: "Plesk", icon: <IconPlesk widht={30} height={30} /> },
        { name: "Cpanel", icon: <IconCpanel widht={20} height={20} /> },
      ],
    },
    {
      title: "Otras Herramientas (Diseño, etc.)",
      tools: [
        { name: "Photoshop", icon: <IconPhotoshop /> },
        { name: "Illustrator", icon: <IconIllustrator /> },
        { name: "Adobe XD", icon: <IconAdobexd /> },
      ],
    },
  ],
};

export default otherToolsContent;
