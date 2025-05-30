import * as Icons from "./index";
const icons = [
  { Icon: Icons.Linkedin, title: "Linkedin" },
  { Icon: Icons.IconClose, title: "IconClose" },
  { Icon: Icons.IconCss, title: "IconCss" },
  { Icon: Icons.IconHtml, title: "IconHtml" },
  { Icon: Icons.IconJavascript, title: "IconJavascript" },
    { Icon: Icons.IconReact, title: "IconReact" },
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
