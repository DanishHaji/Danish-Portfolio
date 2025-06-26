"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden font-sans"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30 mix-blend-lighten"
      >
        <source src="/blackhole2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-10 text-white text-left">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-4 md:pr-12">
          {/* Small Heading */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-gray-300"
          >
            Know About Me
          </motion.h3>

          {/* Big Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap gap-2"
          >
            <span>Full-Stack Developer and a little bit of</span>
            <span className="italic font-serif font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.2] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,0,255,0.6)] pb-1">
              everything
            </span>
          </motion.h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed">
            I'm Engr. Danish, a proactive full-stack developer passionate about crafting immersive web experiences. I specialize in React, Next.js, and Node.js, with strong problem-solving skills and a knack for clean, scalable code.
            <br /><br />
            When I'm not coding, I'm exploring AI innovations, optimizing backend systems, or learning the latest tech trends. I believe in waking up each day eager to make a difference one line of code at a time.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 text-2xl">
            <a
              href="https://linkedin.com/in/danish-b5b26b190"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/DanishHaji"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/DanishHaji1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-end mr-6 mt-10 md:mt-0">
          <Image
            src="/about.png"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
