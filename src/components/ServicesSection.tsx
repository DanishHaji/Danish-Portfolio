"use client";
import { motion } from "framer-motion";
import { FaRobot, FaPython, FaGlobe, FaMagic, FaBrain, FaLaptopCode } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "AI Agent Developer",
    description: "Design and deploy smart agents powered by OpenAI or LangChain for automation, knowledge retrieval, and complex task solving.",
    icon: <FaRobot className="text-purple-400" />,
  },
  {
    title: "Generative AI App Developer",
    description: "Build stunning apps using ChatGPT, DALLE, Groq or other GenAI APIs to create content, images, or natural language interactions.",
    icon: <FaMagic className="text-pink-500" />,
  },
  {
    title: "Python Developer",
    description: "Craft efficient Python apps with backend automation, data processing, Streamlit dashboards, and API integrations.",
    icon: <FaPython className="text-yellow-400" />,
  },
  {
    title: "Web Developer",
    description: "Develop responsive and dynamic web apps using Next.js, Tailwind CSS, and modern frontend frameworks.",
    icon: <FaGlobe className="text-blue-400" />,
  },
  {
    title: "AI Solutions Architect",
    description: "Plan and build end-to-end AI systems for business or personal needs — from data pipeline to deployment.",
    icon: <FaBrain className="text-indigo-400" />,
  },
  {
    title: "Full Stack Development",
    description: "Deliver complete frontend + backend systems using TypeScript, React, Node.js, Express, and cloud deployment.",
    icon: <FaLaptopCode className="text-green-400" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-6 bg-black">
      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-300 text-xl font-bold uppercase mb-4 tracking-widest"
      >
        CRAFTING INTELLIGENT EXPERIENCES
      </motion.h3>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-6xl font-bold flex justify-center items-center gap-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
      >
        <span>Developer</span>
        <span className="italic font-serif font-bold text-4xl md:text-7xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* Services Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
