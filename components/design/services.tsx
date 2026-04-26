import Image from "next/image";
import ChatBubbleWing from "@/components/svg/chat-bubble-wing";
import { images } from "@/constants";

export const Gradient = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-0 -left-40 size-226.5 opacity-50 mix-blend-color-dodge"
  >
    <Image
      alt=""
      className="absolute top-1/2 left-1/2 h-354.25 w-318.25 max-w-318.25 -translate-x-1/2 -translate-y-1/2"
      height={1417}
      src={images.gradient}
      style={{ width: "auto", height: "auto" }}
      width={1417}
    />
  </div>
);

export const PhotoChatMessage = () => (
  <div className="absolute top-8 right-8 max-w-70 rounded-t-xl rounded-bl-xl bg-black px-8 py-6 font-code text-base lg:top-16 lg:right-35 lg:max-w-70">
    Hey StarForge, enhance this photo
    <ChatBubbleWing className="absolute bottom-0 left-full" />
  </div>
);

export const VideoChatMessage = () => (
  <div className="absolute top-8 left-12.5 w-full max-w-56 rounded-t-xl rounded-br-xl bg-n-6 pt-2.5 pr-2.5 pb-7 pl-5 font-code text-base md:max-w-70">
    Video generated!
    <div className="absolute -bottom-4.5 left-5 flex size-9 items-center justify-center rounded-xl bg-color-1">
      <Image
        alt="StarForge"
        height={26}
        src={images.starForgeWhiteSymbol}
        width={26}
      />
    </div>
    <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
      just now
    </p>
    <ChatBubbleWing
      className="absolute right-full bottom-0 -scale-x-100"
      pathClassName="fill-n-6"
    />
  </div>
);

export const VideoBar = () => (
  <div className="absolute bottom-0 left-0 flex w-full items-center p-6">
    <Image
      alt="Play"
      className="mr-3 object-contain"
      height={24}
      src={images.play}
      width={24}
    />

    <div className="flex-1 bg-[#D9D9D9]">
      <div className="h-0.5 w-1/2 bg-color-1" />
    </div>
  </div>
);
