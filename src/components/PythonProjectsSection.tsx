"use client";
import { motion } from "framer-motion";
import PythonAppCard from "./PythonAppCard";

const apps = [
  {
    title: "Universal Video Fetcher",
    description: "Seamlessly download videos from any platform with just a link. Supports multiple formats and resolutions for offline access anywhere, anytime. Fast. Reliable. Hassle-free.",
    link: "https://universal-video-downloader.streamlit.app/",
    image: "/apps/app1.png",
    github:"https://github.com/DanishHaji/Universal-Video-Downloader.git",
  },
  {
    title: "My Smart Bookshelf",
    description: "Organize, search, and manage your digital book collection effortlessly. Built using LightSQL, this app offers a sleek personal database for all your reads from novels to notebooks.",
    link: "https://mylibrarymanager.streamlit.app/",
    image: "/apps/app2.png",
    github:"https://github.com/DanishHaji/Py-Pr-Personal-Library-Manager.git"
  },
  {
    title: "VaultX: Secure Data Locker",
    description: "Keep sensitive data encrypted and safe. Powered by strong encryption methods, VaultX ensures that your private notes, passwords, and keys are locked away securely and only you hold the key.",
    link: "https://data-encryption.streamlit.app/",
    image: "/apps/app3.png",
    github:"https://github.com/DanishHaji/Py-Pr-Secure-Data-Encryption-System.git"
  },
  {
    title: "ConvertIQ: AI-Powered Toolkit",
    description: "Convert anything currencies, units, formats in a snap. With Groq API integrated, it leverages generative intelligence to offer smart suggestions and real-time precision.",
    link: "https://smartconverter.streamlit.app/",
    image: "/apps/app4.png",
    github:"https://github.com/DanishHaji/Python_Project_1_-Unit-Converter-.git"
  },
];

const PythonProjectsSection = () => {
  return (
    <section id="apps" className="py-16 px-6 bg-black">
      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-300 text-xl font-bold uppercase mb-4 tracking-widest"
      >
        INSIGHTS TURNED INTO INTERFACES
      </motion.h3>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl sm:text-4xl md:text-6xl font-bold flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
      >
        <span>Python-Powered</span>
        <span className="italic font-serif font-bold text-4xl sm:text-4xl md:text-6xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
          Solutions
        </span>
      </motion.h2>

      {/* Cards grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {apps.map((app, index) => (
          <PythonAppCard key={index} {...app} />
        ))}
      </div>
    </section>
  );
};

export default PythonProjectsSection;
