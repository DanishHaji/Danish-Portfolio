import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/engine"; // Updated import
import type { Engine } from "@tsparticles/engine"; // Updated type import
import Image from "next/image";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-black text-white overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          },
        }}
        className="absolute inset-0"
      />

      {/* Hero Content */}
      <div className="z-10 text-center">
        <Image
          src="/danish.png"
          alt="Engr. Danish"
          width={150}
          height={150}
          className="rounded-full shadow-xl"
        />
        <h1 className="text-4xl font-bold mt-4">Engr. Danish</h1>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl" />
    </div>
  );
}
