import Image from "next/image";
import Button from "@/components/atoms/button";
import { LeftCurve, RightCurve } from "@/components/design/collaboration";
import Section from "@/components/layout/section";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { collabApps, collabContent, collabText, images } from "@/constants";

const Collaboration = () => (
  <Section crosses id="collaboration">
    <div className="container lg:flex">
      <div className="max-w-[25rem]">
        <h2 className="h2 mb-12 max-md:mb-4">
          AI Chat App for seamless collaboration
        </h2>
        <ul className="mb-10 max-w-[22rem] md:mb-14">
          {collabContent.map((item) => (
            <li className="mb-3 py-3" key={item.id}>
              <div className="flex items-center">
                <Image alt="check" height={24} src={images.check} width={24} />
                <h6 className="body-2 ml-5">{item.title}</h6>
              </div>
              {!!item.text && (
                <p className="body-2 mt-3 text-n-4">{item.text}</p>
              )}
            </li>
          ))}
        </ul>
        <Button>Try it now</Button>
      </div>

      <div className="mt-4 lg:ml-auto xl:w-[38rem]">
        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
          {collabText}
        </p>

        <div className="-translate-x-1/2 relative left-1/2 flex aspect-square w-[22rem] scale-75 rounded-full border border-n-8 md:scale-100">
          <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
            <div className="relative m-auto aspect-square w-24 rounded-full p-[0.2rem]">
              <div className="absolute inset-0 animate-spin rounded-full bg-conic-gradient" />

              <div className="relative flex h-full items-center justify-center rounded-full bg-n-8">
                <Image
                  alt="StarForge"
                  draggable={false}
                  height={48}
                  src={images.starForgeSymbol}
                  width={48}
                />
              </div>
            </div>
          </div>

          <ul>
            <OrbitingCircles
              className="-ml-[2.9rem] absolute top-[90px] left-1/2 h-1/2 origin-bottom"
              iconSize={95}
              radius={175}
            >
              {collabApps.map((item) => (
                <div
                  className="rounded-xl border border-n-5 p-2.5"
                  key={item.id}
                >
                  <Image
                    alt={item.title}
                    className="m-auto aspect-square"
                    draggable={false}
                    height={36}
                    src={item.icon}
                    width={36}
                  />
                </div>
              ))}
            </OrbitingCircles>
          </ul>

          <LeftCurve />
          <RightCurve />
        </div>
      </div>
    </div>
  </Section>
);

export default Collaboration;
