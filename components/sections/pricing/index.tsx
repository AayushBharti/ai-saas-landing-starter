import Heading from "@/components/atoms/heading"
import Section from "@/components/layout/section"
import { images } from "@/constants"
import Image from "next/image"
import React from "react"
import PricingList from "./pricing-list"
import { LeftLine, RightLine } from "@/components/design/pricing"
import Link from "next/link"

type Props = {}

const Pricing = (props: Props) => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image
            src={images.smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="small sphere"
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={images.stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with StarForge"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            className="border-b font-code text-xs font-bold uppercase tracking-wider"
            href="#pricing"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
