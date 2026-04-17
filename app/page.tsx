import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import Roadmap from "@/components/sections/roadmap";
import Services from "@/components/sections/services";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <a
        className="sr-only z-100 bg-color-1 px-4 py-2 font-semibold text-n-8 focus:not-sr-only focus:fixed focus:top-0 focus:left-0"
        href="#main-content"
      >
        Skip to main content
      </a>
      <div className={cn("overflow-hidden pt-16 lg:pt-37")}>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
          <Roadmap />
        </main>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
