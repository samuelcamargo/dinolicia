import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Packages from "@/components/sections/Packages";

// Forçar renderização dinâmica para evitar problemas com framer-motion
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
    </>
  );
}

