import Image from "next/image";
import { images, notificationImages } from "@/constants";
import { cn } from "@/lib/utils";

type Props = {
  className: string;
  title: string;
};

const Notification = ({ className, title }: Props) => (
  <div
    className={cn(
      "flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur",
      className
    )}
  >
    <Image
      alt="image"
      className="rounded-xl"
      height={62}
      src={images.notification1}
      width={62}
    />
    <div className="flex-1">
      <h6 className="mb-1 justify-between font-semibold text-base">{title}</h6>

      <div className="flex items-center justify-between">
        <ul className="-m-0.5 flex">
          {notificationImages.map((item, index) => (
            <li
              className="flex size-6 overflow-hidden rounded-full border-2 border-n-12"
              key={index}
            >
              <Image
                alt={item}
                className="w-full"
                height={20}
                src={item}
                width={20}
              />
            </li>
          ))}
        </ul>
        <div className="body-2 text-n-13">1m ago</div>
      </div>
    </div>
  </div>
);

export default Notification;
