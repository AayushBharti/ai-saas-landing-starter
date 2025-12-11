"use client";

import NumberFlow from "@number-flow/react";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/atoms/button";
import { images, pricing } from "@/constants";
import { Tab } from "./pricing-tab";

const PricingList = () => {
  const [selected, setSelected] = useState("Monthly");

  return (
    <div className="flex flex-col gap-4 max-lg:flex-wrap">
      <div className="mx-auto mb-6 flex w-fit rounded-full bg-n-6/50 p-1 shadow-sm">
        <Tab
          selected={selected === "Monthly"}
          setSelected={() => setSelected("Monthly")}
          text="Monthly"
        />
        <Tab
          discount={true}
          selected={selected === "Yearly"}
          setSelected={() => setSelected("Yearly")}
          text="Yearly"
        />
      </div>
      <div className="flex gap-4 max-lg:flex-col">
        {pricing.map((item) => {
          const price =
            selected === "Monthly"
              ? item.price
              : Number(item.price) * 12 * 0.75;

          return (
            <div
              className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
              key={item.id}
            >
              <h4 className="h4 mb-4">{item.title}</h4>
              <p className="body-2 mb-3 min-h-16 text-n-1/50">
                {item.description}
              </p>

              <div className="mb-6 flex h-[5.5rem] items-center">
                {!!item.price && (
                  <>
                    <span className="h2">$</span>
                    <span className="font-bold text-[5.5rem] leading-none">
                      <NumberFlow
                        suffix={selected === "Monthly" ? "/mo" : "/yr"}
                        value={Number(price)}
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
                    className="flex items-start border-n-6 border-t py-5"
                    key={index}
                  >
                    <Image
                      alt="check"
                      height={24}
                      src={images.check}
                      width={24}
                    />
                    <p className="body-2 ml-4">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingList;
