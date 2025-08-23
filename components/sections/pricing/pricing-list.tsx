"use client"

import Button from "@/components/atoms/button"
import { images, pricing } from "@/constants"
import React, { useState } from "react"
import Image from "next/image"
import { Tab } from "./pricing-tab"
import NumberFlow from "@number-flow/react"

type Props = {}

const PricingList = (props: Props) => {
  const [selected, setSelected] = useState("Monthly")

  return (
    <div className="flex flex-col gap-4 max-lg:flex-wrap">
      <div className="mx-auto mb-6 flex w-fit rounded-full bg-n-6/50 p-1 shadow-sm">
        <Tab
          text="Monthly"
          selected={selected === "Monthly"}
          setSelected={() => setSelected("Monthly")}
        />
        <Tab
          text="Yearly"
          discount={true}
          selected={selected === "Yearly"}
          setSelected={() => setSelected("Yearly")}
        />
      </div>
      <div className="flex gap-4 max-lg:flex-col">
        {pricing.map(item => {
          const price =
            selected === "Monthly" ? item.price : Number(item.price) * 12 * 0.75

          return (
            <div
              key={item.id}
              className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
            >
              <h4 className="h4 mb-4">{item.title}</h4>
              <p className="body-2 mb-3 min-h-16 text-n-1/50">
                {item.description}
              </p>

              <div className="mb-6 flex h-[5.5rem] items-center">
                {item.price && (
                  <>
                    <span className="h2">$</span>
                    <span className="text-[5.5rem] font-bold leading-none">
                      <NumberFlow
                        value={Number(price)}
                        suffix={selected === "Monthly" ? "/mo" : "/yr"}
                      />
                    </span>
                  </>
                )}
              </div>

              <Button
                className="mb-6 w-full"
                href={item.price ? "/pricing" : "mailto:contact@StarForge.ai"}
                white={!!item.price}
              >
                {item.price ? "Get started" : "Contact us"}
              </Button>

              <ul>
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start border-t border-n-6 py-5"
                  >
                    <Image
                      src={images.check}
                      width={24}
                      height={24}
                      alt="check"
                    />
                    <p className="body-2 ml-4">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PricingList
