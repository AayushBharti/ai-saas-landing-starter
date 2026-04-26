import Image from "next/image";
import { companyLogos } from "@/constants";
import { Marquee } from "../../ui/marquee";

const CompanyLogos = ({ className }: { className?: string }) => (
  <div className={className}>
    <p className="tagline mb-6 text-center text-n-1/50">
      Helping people create beautiful content at
    </p>
    <Marquee className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex [--duration:20s] [--gap:4rem]">
      {companyLogos.map((logo, index) => (
        <li
          className="flex h-34 flex-1 items-center justify-center"
          key={index}
        >
          <Image alt="" height={28} src={logo} width={134} />
        </li>
      ))}
    </Marquee>
  </div>
);

export default CompanyLogos;
