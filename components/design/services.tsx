import Image from "next/image";
import ChatBubbleWing from "@/components/svg/chat-bubble-wing";
import { images } from "@/constants";

export const Gradient = () => (
  <div className="-left-40 pointer-events-none absolute top-0 size-[56.625rem] opacity-50 mix-blend-color-dodge">
    <Image
      alt="Gradient"
      className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem]"
      height={1417}
      src={images.gradient}
      width={1417}
    />
  </div>
);

export const PhotoChatMessage = () => (
  <div className="absolute top-8 right-8 max-w-[17.5rem] rounded-t-xl rounded-bl-xl bg-black px-8 py-6 font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
    Hey StarForge, enhance this photo
    <ChatBubbleWing className="absolute bottom-0 left-full" />
  </div>
);

export const VideoChatMessage = () => (
  <div className="absolute top-8 left-[3.125rem] w-full max-w-56 rounded-t-xl rounded-br-xl bg-n-6 pt-2.5 pr-2.5 pb-7 pl-5 font-code text-base md:max-w-[17.5rem]">
    Video generated!
    <div className="absolute bottom-[-1.125rem] left-5 flex size-9 items-center justify-center rounded-xl bg-color-1">
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
      className="-scale-x-100 absolute right-full bottom-0"
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
