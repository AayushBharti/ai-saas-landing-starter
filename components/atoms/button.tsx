import Link from "next/link";
import type React from "react";
import ButtonSvg from "@/components/svg/button-svg";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  px?: string;
  white?: boolean;
};

const Button = ({
  className,
  href = "",
  children,
  onClick,
  px = "px-7",
  white = false,
}: Props) => {
  const buttonClasses = cn(
    "button relative inline-flex h-11 items-center justify-center",
    "transition-colors hover:text-color-1",
    px,
    white ? "text-n-8" : "text-n-1",
    className || ""
  );

  const spanClasses = cn("relative z-10");

  const renderButton = () => (
    <button className={buttonClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <Link className={buttonClasses} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );

  return href !== "" ? renderLink() : renderButton();
};

export default Button;
