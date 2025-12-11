import Image from "next/image";
import { GradientLight } from "@/components/design/benefits";
import Section from "@/components/layout/section";
import Arrow from "@/components/svg/arrow";
import ClipPath from "@/components/svg/clip-path";
import { benefits } from "@/constants";
import Heading from "../../atoms/heading";

const Benefits = () => (
  <Section id="features">
    <div className="container relative z-2">
      <Heading
        className="md:max-w-md lg:max-w-2xl"
        title="Chat Smarter, Not Harder with StarForge"
      />

      <div className="mb-10 flex flex-wrap gap-8">
        {benefits.map((item) => (
          <div
            className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-sm"
            key={item.id}
            style={{ backgroundImage: `url(${item.backgroundUrl})` }}
          >
            <div className="pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]">
              <h5 className="h5 mb-5">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
              <div className="mt-auto flex items-center">
                <Image
                  alt={item.title}
                  height={48}
                  src={item.iconUrl}
                  width={48}
                />
                <p className="ml-auto font-bold font-code text-n-1 text-xs uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            {!!item.light && <GradientLight />}

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {!!item.imageUrl && (
                  <Image
                    alt={item.title}
                    className="size-full object-cover"
                    height={362}
                    src={item.imageUrl}
                    width={380}
                  />
                )}
              </div>
            </div>

            <ClipPath />
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Benefits;
