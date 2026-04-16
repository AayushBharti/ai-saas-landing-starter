"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { navigation } from "@/constants";
import { useCompactScroll } from "@/hooks/use-compact-scroll";
import { cn } from "@/lib/utils";
import { starForgeSymbol } from "@/public/assets/index";
import Button from "../atoms/button";
import { HamburgerMenu } from "../design/navbar";
import MenuSvg from "../svg/menu-svg";

const navSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 35,
};

const Navbar = () => {
  const [hash, setHash] = useState<string>("hero");
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const isCompact = useCompactScroll();
  const [ctaRef, ctaBounds] = useMeasure();

  useEffect(() => {
    const dynamicNavbarHighlight = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        if (current === null) return;

        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
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
    <motion.header
      className={cn(
        "fixed top-0 left-0 z-50 w-full",
        openNavigation ? "bg-n-8" : "bg-n-8/80 backdrop-blur-[20px]"
      )}
      initial={false}
      transition={navSpring}
    >
      {/* Row 1: Utility bar — compresses upward on scroll. Hidden on mobile. */}
      <motion.div
        animate={{
          height: isCompact ? 0 : "auto",
          opacity: isCompact ? 0 : 1,
        }}
        className="hidden overflow-hidden lg:block"
        initial={false}
        transition={navSpring}
      >
        <div className="border-n-6 border-b">
          <div className="flex min-h-14 items-center justify-between px-5 py-2 lg:px-7.5 xl:px-10">
            <LanguageSelector />
            {/* Invisible spacer matching the CTA buttons width */}
            <div style={{ width: ctaBounds.width }} />
          </div>
        </div>
      </motion.div>

      {/* Row 2: Main navigation */}
      <div className="border-n-6 border-b">
        <motion.div
          animate={{
            paddingTop: isCompact ? 10 : 16,
            paddingBottom: isCompact ? 10 : 16,
          }}
          className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10"
          initial={false}
          transition={navSpring}
        >
          {/* Left: Logo */}
          <NavbarLogo isCompact={isCompact} />

          {/* Right: Nav links + spacer for floating CTA */}
          <div className="flex items-center">
            <nav
              className={cn(
                "fixed inset-x-0 top-20 bottom-0 hidden bg-n-8 lg:static lg:flex lg:bg-transparent",
                openNavigation ? "flex" : "hidden"
              )}
            >
              <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
                {navigation.map((item) => (
                  <Link
                    aria-current={item.url === hash ? "page" : undefined}
                    className={cn(
                      "relative block font-code text-2xl text-n-1 uppercase transition-colors hover:text-color-1",
                      "px-6 py-2 lg:-mr-0.25 lg:font-semibold lg:text-xs",
                      !!item.onlyMobile && "lg:hidden",
                      item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50",
                      "lg:leading-5 lg:hover:text-n-1 xl:px-9"
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

            {/* Spacer — reserves room for the floating CTA buttons when compact */}
            <motion.div
              animate={{ width: isCompact ? ctaBounds.width : 0 }}
              className="hidden shrink-0 lg:block"
              initial={false}
              transition={navSpring}
            />

            <Button
              aria-expanded={openNavigation}
              aria-label="Toggle navigation menu"
              className="ml-auto lg:hidden"
              onClick={toggleNavigation}
              px="px-3"
            >
              <MenuSvg openNavigation={openNavigation} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA buttons — absolutely positioned, always visible.
          Scale down slightly when compact. Like slingshot's FloatingIcons. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden lg:block">
        <div className="flex items-start justify-end px-5 py-2 lg:px-7.5 xl:px-10">
          <div className="pointer-events-auto" ref={ctaRef}>
            <motion.div
              animate={{ scale: isCompact ? 0.95 : 0.8 }}
              className="flex items-center gap-5 ps-4 xl:ps-5"
              initial={false}
              style={{ transformOrigin: "right center" }}
              transition={navSpring}
            >
              <Link
                className="button whitespace-nowrap text-n-1/50 transition-colors hover:text-n-1"
                href="#signup"
              >
                New account
              </Link>
              <Button className="whitespace-nowrap" href="#login" px="px-5">
                Sign in
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

/**
 * Logo — mirrors slingshot's desktop/logo.tsx.
 * Container width: auto → 40px. Text opacity fades. Icon stays.
 * GPU-pinned to prevent iOS Safari reflow during animation.
 */
function NavbarLogo({ isCompact }: { isCompact: boolean }) {
  return (
    <motion.div
      animate={{ width: isCompact ? 40 : "auto" }}
      className="relative h-10 shrink-0 overflow-hidden"
      initial={false}
      transition={navSpring}
    >
      <Link className="relative flex h-full items-center gap-2" href="#hero">
        <Image
          alt="StarForge"
          className="shrink-0"
          height={40}
          src={starForgeSymbol}
          style={{
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
          width={40}
        />
        <motion.div
          animate={{ opacity: isCompact ? 0 : 1 }}
          initial={false}
          style={{
            width: "max-content",
            minWidth: "max-content",
            flexShrink: 0,
            transform: "translate3d(0,0,0)",
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
            isolation: "isolate",
          }}
          transition={navSpring}
        >
          <p className="font-extrabold font-grotesk text-2xl tracking-wide">
            StarForge
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
}

const languages = [
  { code: "en-GB", label: "English (UK)" },
  { code: "en-US", label: "English (US)" },
];

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [btnRef, setBtnRef] = useState<HTMLButtonElement | null>(null);

  const rect = btnRef?.getBoundingClientRect();

  return (
    <>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        className="button flex items-center gap-2 rounded-lg px-1 py-1.5 text-n-1/50 transition-colors hover:text-n-1"
        onClick={() => setOpen(!open)}
        ref={setBtnRef}
      >
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.6 9h16.8M3.6 15h16.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3a14.1 14.1 0 0 1 4 9 14.1 14.1 0 0 1-4 9 14.1 14.1 0 0 1-4-9 14.1 14.1 0 0 1 4-9Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {selected.label}
        <svg
          aria-hidden="true"
          className={cn("size-3 transition-transform", open && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && rect && (
        <>
          <div
            className="fixed inset-0 z-[100]"
            onClick={() => setOpen(false)}
          />
          <ul
            className="fixed z-[101] min-w-36 rounded-lg border border-n-6 bg-n-8 py-1 shadow-lg"
            role="listbox"
            style={{ top: rect.bottom + 4, left: rect.left }}
          >
            {languages.map((lang) => (
              <li
                aria-selected={lang.code === selected.code}
                className={cn(
                  "cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-n-7",
                  lang.code === selected.code ? "text-color-1" : "text-n-3"
                )}
                key={lang.code}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                role="option"
              >
                {lang.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Navbar;
