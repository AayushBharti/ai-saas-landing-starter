import { cn } from "@/lib/utils";
import TagLine from "./tag-line";

const Heading = ({
  className,
  title,
  text,
  tag,
}: {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}) => (
  <div
    className={cn(
      className,
      "mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20"
    )}
  >
    {!!tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
    {!!title && <h2 className="h2">{title}</h2>}
    {!!text && <p className="body-2 mt-4 text-n-4">{text}</p>}
  </div>
);

export default Heading;
