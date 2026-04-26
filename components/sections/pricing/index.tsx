import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/atoms/heading";
import { LeftLine, RightLine } from "@/components/design/pricing";
import Section from "@/components/layout/section";
import { images } from "@/constants";
import PricingList from "./pricing-list";

const Pricing = () => (
  <Section className="overflow-hidden" id="pricing">
    <div className="container relative z-2">
      <div className="relative mb-26 hidden justify-center lg:flex">
        <Image
          alt=""
          className="relative z-1"
          height={255}
          src={images.smallSphere}
          width={255}
        />

        <div className="pointer-events-none absolute top-1/2 left-1/2 w-240 -translate-x-1/2 -translate-y-1/2">
          <Image
            alt=""
            className="w-full"
            height={400}
            src={images.stars}
            width={950}
          />
        </div>
      </div>

      <Heading tag="Get started with StarForge" title="Pay once, use forever" />

      <div className="relative">
        <PricingList />
        <LeftLine />
        <RightLine />
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          className="border-b font-bold font-code text-xs uppercase tracking-wider"
          href="#pricing"
        >
          See the full details
        </Link>
      </div>
    </div>
  </Section>
);

export default Pricing;
