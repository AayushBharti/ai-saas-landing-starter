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
          <div className="relative z-1 mb-5 flex h-156 items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-184">
            <div className="pointer-events-none absolute top-0 left-0 h-full md:w-3/5 xl:w-auto">
              <Image
                alt="AI assistant interface demonstrating smart capabilities"
                className="size-full object-cover md:object-right"
                height={730}
                loading="eager"
                src={images.service1}
                width={800}
              />
            </div>

            <div className="relative z-1 ml-auto max-w-68">
              <h3 className="h4 mb-4">Smartest AI</h3>
              <p className="body-2 mb-12 text-n-3">
                StarForge unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {starForgeServices.map((service, index) => (
                  <li
                    className="flex items-start border-n-6 border-t py-4"
                    key={index}
                  >
                    <Image alt="" height={24} src={images.check} width={24} />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute inset-x-4 bottom-4 border border-n-1/10 lg:right-auto lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-156 overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <Image
                  alt="AI photo editing demonstration"
                  className="size-full object-cover"
                  height={750}
                  src={images.service2}
                  width={630}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h3 className="h4 mb-4">Photo editing</h3>
                <p className="body-2 mb-12 text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-184">
              <div className="px-4 py-12 xl:px-8">
                <h3 className="h4 mb-4">Video generation</h3>
                <p className="body-2 mb-8 text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <div
                  className="flex items-center justify-between"
                  role="tablist"
                >
                  {starForgeServicesIcons.map((item, index) => (
                    <button
                      aria-label={`Select service ${index + 1}`}
                      aria-selected={index === selectedItem}
                      className={cn(
                        "flex cursor-pointer items-center justify-center rounded-2xl",
                        index === selectedItem
                          ? "h-12 w-12 bg-conic-gradient p-0.25 md:h-18 md:w-18"
                          : "h-10 w-10 bg-n-6 md:h-15 md:w-15"
                      )}
                      key={index}
                      onClick={() => setSelectedItem(index)}
                      role="tab"
                    >
                      <div
                        className={cn(
                          index === selectedItem &&
                            "flex size-full items-center justify-center rounded-2xl bg-n-7"
                        )}
                      >
                        <Image alt="" height={24} src={item} width={24} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative h-80 overflow-hidden rounded-xl bg-n-8 md:h-100">
                <Image
                  alt="AI video generation preview"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={images.service3}
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
