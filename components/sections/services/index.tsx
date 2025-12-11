"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "@/components/design/services";
import Section from "@/components/layout/section";
import { images, starForgeServices, starForgeServicesIcons } from "@/constants";
import { cn } from "@/lib/utils";
import Generating from "../../atoms/generating";
import Heading from "../../atoms/heading";

const Services = () => {
  const [selectedItem, setSelectedItem] = useState<number>(2);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          text="StarForge unlocks the potential of AI-powered applications"
          title="Generative AI made for creators."
        />

        <div className="relative">
          <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute top-0 left-0 h-full md:w-3/5 xl:w-auto">
              <Image
                alt="smartest ai"
                className="size-full object-cover md:object-right"
                height={730}
                src={images.service1}
                width={800}
              />
            </div>

            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-12 text-n-3">
                StarForge unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {starForgeServices.map((service, index) => (
                  <li
                    className="flex items-start border-n-6 border-t py-4"
                    key={index}
                  >
                    <Image
                      alt="check"
                      height={24}
                      src={images.check}
                      width={24}
                    />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="lg:-translate-x-1/2 absolute inset-x-4 bottom-4 border border-n-1/10 lg:right-auto lg:bottom-8 lg:left-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <Image
                  alt="robot"
                  className="size-full object-cover"
                  height={750}
                  src={images.service2}
                  width={630}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-12 text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-8 text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {starForgeServicesIcons.map((item, index) => (
                    <li
                      className={cn(
                        "flex cursor-pointer items-center justify-center rounded-2xl",
                        index === selectedItem
                          ? "h-[3rem] w-[3rem] bg-conic-gradient p-0.25 md:h-[4.5rem] md:w-[4.5rem]"
                          : "h-10 w-10 bg-n-6 md:h-15 md:w-15"
                      )}
                      key={index}
                      onClick={() => setSelectedItem(index)}
                    >
                      <div
                        className={cn(
                          index === selectedItem &&
                            "flex size-full items-center justify-center rounded-2xl bg-n-7"
                        )}
                      >
                        <Image alt="icon" height={24} src={item} width={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-80 overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <Image
                  alt="scary robot"
                  className="size-full object-cover"
                  height={400}
                  src={images.service3}
                  width={520}
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
            <Gradient />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
