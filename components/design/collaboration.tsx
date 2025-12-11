import Image from "next/image";
import { images } from "@/constants";

export const RightCurve = () => (
  <div className="-mt-1 pointer-events-none absolute top-1/2 left-full ml-10 hidden w-[10.125rem] xl:block">
    <Image alt="Curve 2" height={76} src={images.curve2} width={162} />
  </div>
);

export const LeftCurve = () => (
  <div className="-mt-1 pointer-events-none absolute top-1/2 right-full mr-10 hidden w-[32.625rem] xl:block">
    <Image alt="Curve 1" height={182} src={images.curve1} width={522} />
  </div>
);
