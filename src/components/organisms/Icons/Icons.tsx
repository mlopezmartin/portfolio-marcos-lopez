import * as Icons from "./index";
const icons = [
  { Icon: Icons.Linkedin, title: "Linkedin" },
  { Icon: Icons.IconClose, title: "IconClose" },
  { Icon: Icons.IconCss, title: "IconCss" },
  { Icon: Icons.IconHtml, title: "IconHtml" },
  { Icon: Icons.IconJavascript, title: "IconJavascript" },
  { Icon: Icons.IconReact, title: "IconReact" },
  { Icon: Icons.IconGithub, title: "IconGithub" },
  { Icon: Icons.IconDocumentDownload, title: "IconDocumentDownload" },
  { Icon: Icons.IconMenu, title: "IconMenu" },
  { Icon: Icons.IconPdf, title: "IconPdf" },
  { Icon: Icons.IconStrapi, title: "IconStrapi" },
  { Icon: Icons.IconFtp, title: "IconFtp" },
  { Icon: Icons.IconGit, title: "IconGit" },
  { Icon: Icons.IconJira, title: "IconJira" },
  { Icon: Icons.IconPostman, title: "IconPostman" },
  { Icon: Icons.IconWordpress, title: "IconWordpress" },
  { Icon: Icons.IconNotion, title: "IconNotion" },
  { Icon: Icons.IconPhotoshop, title: "IconPhotoshop" },
  { Icon: Icons.IconIllustrator, title: "IconIllustrator" },
  { Icon: Icons.IconAstro, title: "IconAstro" },
  { Icon: Icons.IconNodeJs, title: "IconNodeJs" },
  { Icon: Icons.IconTypescript, title: "IconTypescript" },
  { Icon: Icons.IconNextJs, title: "IconNextJs" },
  { Icon: Icons.IconExpress, title: "IconExpress" },
  { Icon: Icons.IconPostgree, title: "IconPostgree" },
  { Icon: Icons.IconMySql, title: "IconMySql" },
  { Icon: Icons.IconPhp, title: "IconPhp" },
  { Icon: Icons.IconLaravel, title: "IconLaravel" },
  { Icon: Icons.IconPhyton, title: "IconPhyton" },
  { Icon: Icons.IconVercel, title: "IconVercel" },
  { Icon: Icons.IconVsCode, title: "IconVsCode" },
  { Icon: Icons.IconComponents, title: "IconComponents" },
  { Icon: Icons.IconDocker, title: "IconDocker" },
  { Icon: Icons.IconPlesk, title: "IconPlesk" },
];

const IconsComponent = () => {
  return (
    <div className="flex flex-wrap">
      {icons.map(({ Icon, title }, key) => {
        return (
          <div
            key={key}
            className="flex flex-col items-center justify-center h-[85px] w-[85px] rounded cursor-pointer transition-all duration-300 hover:bg-[#20202024]"
          >
            <Icon className="w-6 h-6" color="var(--neutral1)" />
            <div className="text-[10px] mt-3 w-full overflow-hidden text-ellipsis whitespace-nowrap text-center px-2 text-[color:var(--neutral1)]">
              {title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconsComponent;
