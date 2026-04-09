import Image from "next/image";
import Button from "@/components/atoms/button";
import Heading from "@/components/atoms/heading";
import TagLine from "@/components/atoms/tag-line";
import { Gradient } from "@/components/design/roadmap";
import Section from "@/components/layout/section";
import { images, roadmap } from "@/constants";
import { cn } from "@/lib/utils";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we're working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={cn(
                "rounded-[2.5rem] p-0.25 md:flex md:even:translate-y-28",
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              )}
              key={item.id}
            >
              <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <Image
                    alt=""
                    className="w-full"
                    height={550}
                    loading="eager"
                    src={images.grid}
                    style={{ height: "auto" }}
                    width={550}
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-8 flex max-w-108 items-center justify-between md:mb-20">
                    <TagLine>{item.date}</TagLine>

                    <div className="flex items-center rounded-sm bg-n-1 px-4 py-1 text-n-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={status}
                        className="mr-2.5 size-4"
                        src={
                          item.status === "done" ? images.done : images.loading1
                        }
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="relative -mx-15 -my-10 mb-10 aspect-[3/2]">
                    <Image
                      alt={item.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={item.imageUrl}
                    />
                  </div>

                  <h3 className="h4 mb-4">{item.title}</h3>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
        <Button href="#roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
