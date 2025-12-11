import Image from "next/image";
import Link from "next/link";
import { socials } from "@/constants";
import Section from "./section";

const Footer = () => (
  <Section className="!px-0 !py-10" crosses>
    <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
      <p className="caption text-n-4 lg:block">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <ul className="flex flex-wrap gap-5">
        {socials.map((item) => (
          <Link
            className="flex size-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
            href={item.url}
            key={item.id}
            target="_blank"
          >
            <Image alt={item.title} height={16} src={item.iconUrl} width={16} />
          </Link>
        ))}
      </ul>
    </div>
  </Section>
);

export default Footer;
