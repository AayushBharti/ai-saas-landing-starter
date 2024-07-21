import { lines } from "@/public/assets/index";
import Image from "next/image";

export const LeftLine = () => {
  return (
    <div className="pointer-events-none absolute right-full top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 lg:block">
      <Image className="w-full" src={lines} width={1480} height={177} alt="Lines" />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="pointer-events-none absolute left-full top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 -scale-x-100 lg:block">
      <Image className="w-full" src={lines} width={1480} height={177} alt="Lines" />
    </div>
  );
};
