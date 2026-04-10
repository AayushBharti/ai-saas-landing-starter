import Image from "next/image";
import { images } from "@/constants";

export const RightCurve = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-1/2 left-full -mt-1 ml-10 hidden w-40.5 xl:block"
  >
    <Image alt="" height={76} src={images.curve2} width={162} />
  </div>
);

export const LeftCurve = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-1/2 right-full -mt-1 mr-10 hidden w-130.5 xl:block"
  >
    <Image alt="" height={182} src={images.curve1} width={522} />
  </div>
);
