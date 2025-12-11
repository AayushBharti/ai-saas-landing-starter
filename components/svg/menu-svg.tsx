const MenuSvg = ({ openNavigation }: { openNavigation: boolean }) => (
  <svg className="overflow-visible" height="12" viewBox="0 0 20 12" width="20">
    <rect
      className="origin-center transition-all"
      fill="white"
      height="2"
      rx="1"
      transform={`rotate(${openNavigation ? "45" : "0"})`}
      width="20"
      y={openNavigation ? "5" : "0"}
    />
    <rect
      className="origin-center transition-all"
      fill="white"
      height="2"
      rx="1"
      transform={`rotate(${openNavigation ? "-45" : "0"})`}
      width="20"
      y={openNavigation ? "5" : "10"}
    />
  </svg>
);

export default MenuSvg;
