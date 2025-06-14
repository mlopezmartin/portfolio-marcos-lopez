const IconStrapi = ({
  className,
  width = 24,
  height = 24,
  color = "currentcolor",
}: any) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      {...{ className, width, height }}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M1640 4265 l0 -855 830 0 c905 0 879 2 917 -56 17 -27 18 -74 21
        -871 l2 -843 855 0 855 0 0 1690 c0 1439 -2 1696 -14 1725 -30 70 110 65
        -1771 65 l-1695 0 0 -855z"
        />
        <path
          d="M762 4241 c-419 -423 -762 -776 -762 -784 0 -8 8 -21 18 -30 17 -16
        84 -17 765 -17 l747 0 0 800 c0 440 -1 800 -3 800 -2 0 -346 -346 -765 -769z"
        />
        <path
          d="M1640 2504 l0 -796 34 -34 34 -34 796 0 796 0 -2 800 -3 800 -28 27
        -27 28 -800 3 -800 2 0 -796z"
        />
        <path
          d="M3410 775 l0 -754 21 -11 c11 -7 31 -9 43 -6 12 3 361 347 775 766
        l753 760 -796 0 -796 0 0 -755z"
        />
      </g>
    </svg>
  );
};

export default IconStrapi;
