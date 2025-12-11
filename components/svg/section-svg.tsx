import PlusSvg from "./plus-svg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => (
  <>
    <PlusSvg
      className={`absolute top-[-0.3125rem] left-[1.5625rem] hidden ${
        !!crossesOffset && crossesOffset
      } pointer-events-none lg:block xl:left-[2.1875rem]`}
    />

    <PlusSvg
      className={`absolute top-[-0.3125rem] right-[1.5625rem] hidden ${
        !!crossesOffset && crossesOffset
      } pointer-events-none lg:block xl:right-[2.1875rem]`}
    />
  </>
);

export default SectionSvg;
