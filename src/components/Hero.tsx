"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: { events: { onClick: { enable: false }, onHover: { enable: false } } },
    particles: {
      color: { value: "#ffffff" },
      move: { direction: "none", enable: true, speed: 0.5 },
      number: { density: { enable: true, area: 800 }, value: 100 },
      opacity: { value: { min: 0.2, max: 0.6 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center items-center text-white px-4 pb-10">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6 leading-tight" variants={itemVariants}>
          I help founders turn ideas into seamless{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 font-serif italic">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.div className="text-xl sm:text-2xl md:text-2xl mb-8" variants={itemVariants}>
          <p className="inline-flex text-4xl items-center gap-2">
            Hi, I'm{" "}
            <span className="font-semibold text-purple-300 inline-flex items-center gap-2">
              Engr. Danish
              <img
                src="/dani.png"
                alt="Danish"
                className="w-16 h-16 rounded-full border-2 border-purple-400 shadow-lg"
              />
            </span>
            , a Full Stack Developer
          </p>
        </motion.div>

        <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
          {/* Social Icons */}
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/DanishHaji"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#9333ea" }}
              className="text-3xl sm:text-4xl text-white hover:text-purple-400 transition-colors"
            >
              <FiGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/danish-b5b26b190"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#0a66c2" }}
              className="text-3xl sm:text-4xl text-white hover:text-blue-500 transition-colors"
            >
              <FiLinkedin />
            </motion.a>

            <motion.a
              href="mailto:danish.haji111@gmail.com"
              whileHover={{ y: -3, color: "#ea4335" }}
              className="text-3xl sm:text-4xl text-white hover:text-red-500 transition-colors"
            >
              <FiMail />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Magical Glow Curve */}
      <div className="absolute bottom-0 left-0 w-full h-60 overflow-hidden z-10">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="magicalGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="30" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0,180 Q720,30 1440,180"
            stroke="url(#flameGradient)"
            strokeWidth="5"
            fill="none"
            filter="url(#magicalGlow)"
            className="animate-glowPulse"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0% { stroke-opacity: 0.8; filter: drop-shadow(0 0 20px #9333ea); }
          50% { stroke-opacity: 1; filter: drop-shadow(0 0 60px #c084fc); }
          100% { stroke-opacity: 0.9; filter: drop-shadow(0 0 40px #9333ea); }
        }
        .animate-glowPulse { animation: glowPulse 3s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default HeroSection;
