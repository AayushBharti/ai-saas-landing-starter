import type React from "react";
import { cn } from "@/lib/utils";
import brackets from "../svg/brackets";

const TagLine = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={cn("tagline flex items-center", className)}>
    {brackets("left")}
    <div className="mx-3 text-n-3">{children}</div>
    {brackets("right")}
  </div>
);

export default TagLine;
