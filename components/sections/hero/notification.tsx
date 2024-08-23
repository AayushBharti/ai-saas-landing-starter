import { images, notificationImages } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className: string;
  title: string;
};

const Notification = ({ className, title }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5",
        className
      )}
    >
      <Image src={images.notification1} width={62} height={62} alt="image" className="rounded-xl" />
      <div className="flex-1">
        <h6 className="mb-1 justify-between text-base font-semibold">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex size-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <Image src={item} className="w-full" width={20} height={20} alt={item} />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
