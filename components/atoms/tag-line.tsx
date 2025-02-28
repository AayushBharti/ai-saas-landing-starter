import { cn } from "@/lib/utils";
import React from "react";
import brackets from "../svg/brackets";

type Props = { className?: string; children: React.ReactNode };

const TagLine = ({ className, children }: Props) => {
  return (
    <div className={cn("tagline flex items-center", className)}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
