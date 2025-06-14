import type { SkillsProps } from "@/components/molecules/Skills/Skills.types";
import {
  IconAstro,
  IconBootstrap,
  IconComponents,
  IconCss,
  IconExpress,
  IconHtml,
  IconJavascript,
  IconJquery,
  IconLaravel,
  IconMySql,
  IconNextJs,
  IconNodeJs,
  IconPhp,
  IconPhyton,
  IconPostgree,
  IconReact,
  IconTailwind,
  IconTypescript,
} from "@/components/organisms/Icons";
import IconApi from "@/components/organisms/Icons/Svg/IconApi";

const skillsContent: SkillsProps = {
  title: "Mis Habilidades <strong> Full Stack </strong>",
  skills: [
    { name: "Css3", icon: <IconCss /> },
    { name: "Html5", icon: <IconHtml /> },
    { name: "Javascript", icon: <IconJavascript /> },
    { name: "JQuery", icon: <IconJquery widht={20} height={20} /> },
    { name: "Tailwind", icon: <IconTailwind /> },
    { name: "Bootstrap", icon: <IconBootstrap /> },
    { name: "Php", icon: <IconPhp /> },
    { name: "Laravel", icon: <IconLaravel /> },
    { name: "Phython", icon: <IconPhyton /> },
    { name: "React", icon: <IconReact /> },
    { name: "Web Components", icon: <IconComponents /> },
    { name: "Typescript", icon: <IconTypescript /> },
    { name: "Astro", icon: <IconAstro /> },
    { name: "Next Js", icon: <IconNextJs /> },
    { name: "Express Js", icon: <IconExpress widht={20} height={20} /> },
    { name: "Node Js", icon: <IconNodeJs /> },
    { name: "Postgree", icon: <IconPostgree /> },
    { name: "My Sql", icon: <IconMySql /> },
    { name: "APIs RESTful", icon: <IconApi /> },
  ],
};

export default skillsContent;
