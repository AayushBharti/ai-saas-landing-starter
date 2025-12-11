import Image from "next/image";
import { companyLogos } from "@/constants";
import { Marquee } from "../../ui/marquee";

const CompanyLogos = ({ className }: { className?: string }) => (
  <div className={className}>
    <h5 className="tagline mb-6 text-center text-n-1/50">
      Helping people create beautiful content at
    </h5>
    <Marquee className="flex [--duration:20s] [--gap:4rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {companyLogos.map((logo, index) => (
        <li
          className="flex h-[8.5rem] flex-1 items-center justify-center"
          key={index}
        >
          <Image alt={logo} height={28} src={logo} width={134} />
        </li>
      ))}
    </Marquee>
  </div>
);

export default CompanyLogos;
