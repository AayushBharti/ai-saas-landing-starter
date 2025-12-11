import Image from "next/image";
import { lines } from "@/public/assets/index";

export const LeftLine = () => (
  <div className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-full hidden h-[11.0625rem] w-[92.5rem] lg:block">
    <Image
      alt="Lines"
      className="w-full"
      height={177}
      src={lines}
      width={1480}
    />
  </div>
);

export const RightLine = () => (
  <div className="-translate-y-1/2 -scale-x-100 pointer-events-none absolute top-1/2 left-full hidden h-[11.0625rem] w-[92.5rem] lg:block">
    <Image
      alt="Lines"
      className="w-full"
      height={177}
      src={lines}
      width={1480}
    />
  </div>
);
