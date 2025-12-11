import Image from "next/image";
import { images } from "@/constants";

export const Rings = () => (
  <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[51.375rem] rounded-full border border-n-2/10">
    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[36.125rem] rounded-full border border-n-2/10" />
    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[23.125rem] rounded-full border border-n-2/10" />
  </div>
);

export const SideLines = () => (
  <>
    <div className="absolute top-0 left-5 h-full w-0.25 bg-n-6" />
    <div className="absolute top-0 right-5 h-full w-0.25 bg-n-6" />
  </>
);

export const BackgroundCircles = () => (
  <>
    <div className="absolute top-[4.4rem] left-16 size-3 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32]" />
    <div className="absolute top-[12.6rem] right-16 size-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32]" />
    <div className="absolute top-[26.8rem] left-12 size-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32]" />
  </>
);

export const HamburgerMenu = () => (
  <div className="pointer-events-none absolute inset-0 lg:hidden">
    <div className="absolute inset-0 opacity-[.03]">
      <Image
        alt="Background"
        className="size-full object-cover"
        height={953}
        src={images.background}
        width={688}
      />
    </div>

    <Rings />

    <SideLines />

    <BackgroundCircles />
  </div>
);
