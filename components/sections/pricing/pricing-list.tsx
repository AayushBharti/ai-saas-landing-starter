import Button from "@/components/atoms/button"
import { images, pricing } from "@/constants"
import React from "react"
import Image from "next/image"

type Props = {}

const PricingList = (props: Props) => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map(item => (
        <div
          key={item.id}
          className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 mb-3 min-h-16 text-n-1/50">{item.description}</p>

          <div className="mb-6 flex h-[5.5rem] items-center">
            {item.price && (
              <>
                <span className="h3">$</span>
                <span className="text-[5.5rem] font-bold leading-none">
                  {item.price}
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
                <Image src={images.check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PricingList
