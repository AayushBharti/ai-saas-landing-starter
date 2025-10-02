import { companyLogos } from "@/constants"
import Image from "next/image"
import { Marquee } from "../../ui/marquee"

const CompanyLogos = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <Marquee className="flex [--duration:20s] [--gap:4rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </Marquee>
    </div>
  )
}

export default CompanyLogos
