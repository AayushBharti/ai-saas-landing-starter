"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/constants";
import { cn } from "@/lib/utils";
import { starForgeSymbol } from "@/public/assets/index";
import Button from "../atoms/button";
import { HamburgerMenu } from "../design/navbar";
import MenuSvg from "../svg/menu-svg";

const Navbar = () => {
  const [hash, setHash] = useState<string>("hero");
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  useEffect(() => {
    const dynamicNavbarHighlight = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        if (current === null) return;

        const sectionId = current.getAttribute("id");
        // @ts-expect-error
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (
          sectionTop < 0 &&
          sectionTop + sectionHeight > 0 &&
          hash !== sectionId
        ) {
          setHash(`#${sectionId as string}`);
        }
      });
    };

    window.addEventListener("scroll", dynamicNavbarHighlight);

    return () => window.removeEventListener("scroll", dynamicNavbarHighlight);
  }, [hash]);

  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 w-full border-n-6 border-b lg:bg-n-8/90 lg:backdrop-blur-sm",
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      )}
    >
      <div
        className={cn("flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10")}
      >
        <Link
          className={cn("flex w-48 items-center gap-2 xl:mr-8")}
          href="#hero"
        >
          <Image alt="StarForge" height={40} src={starForgeSymbol} width={40} />
          <p className="font-extrabold font-grotesk text-2xl tracking-wide">
            StarForge
          </p>
        </Link>

        <nav
          className={cn(
            "fixed inset-x-0 top-20 bottom-0 hidden bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent",
            openNavigation ? "flex" : "hidden"
          )}
        >
          <div
            className={cn(
              "relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row"
            )}
          >
            {navigation.map((item) => (
              <Link
                className={cn(
                  "relative block font-code text-2xl text-n-1 uppercase transition-colors hover:text-color-1",
                  "lg:-mr-0.25 px-6 py-6 md:py-8 lg:font-semibold lg:text-xs",
                  !!item.onlyMobile && "lg:hidden",
                  item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50",
                  "lg:leading-5 lg:hover:text-n-1 xl:px-12"
                )}
                href={item.url}
                key={item.id}
                onClick={handleClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Link
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
          href="#signup"
        >
          New account
        </Link>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
