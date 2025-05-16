import type { Svg } from "@/types/svg";

const LinkedinIcon: Svg = ({
  className,
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2l.117 .007a1 1…" />
    <path d="M19 7h-4l-.001 -4.001z" />
  </svg>
);

export default LinkedinIcon;
