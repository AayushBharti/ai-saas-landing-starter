import Image from "next/image";
import Link from "next/link";
import { socials } from "@/constants";
import Section from "./section";

const Footer = () => (
  <footer>
    <Section className="px-0! py-10!" crosses>
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <Link
              aria-label={item.title}
              className="flex size-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
              href={item.url}
              key={item.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image alt="" height={16} src={item.iconUrl} width={16} />
            </Link>
          ))}
        </ul>
      </div>
    </Section>

    <Section className="px-0! py-4!" crosses>
      <div className="container flex items-center justify-center">
        <p className="caption text-center text-n-4">
          Built by{" "}
          <a
            className="font-semibold text-n-1 transition-colors hover:text-color-1"
            href="https://aayushbharti.in"
            rel="noopener noreferrer"
            target="_blank"
          >
            Aayush Bharti
          </a>
          . The source code is available on{" "}
          <a
            className="font-semibold text-n-1 transition-colors hover:text-color-1"
            href="https://github.com/aayushbharti/ai-saas-landing-starter"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </Section>
  </footer>
);

export default Footer;
