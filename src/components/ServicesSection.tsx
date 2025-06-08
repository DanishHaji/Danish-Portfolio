"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  FaRobot,
  FaBrain,
  FaPython,
  FaLaptopCode,
  FaServer,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "AI Agent Developer",
    description:
      "Designs intelligent agents for automation, task planning, and real-time decision making.",
    icon: <FaRobot />,
    iconColorClass: "text-teal-400",
    hoverGlowColor: "rgba(45, 212, 191, 0.7)",
    headingColorClass: "text-green-400",
  },
  {
    title: "Generative AI App Developer",
    description:
      "Builds creative AI apps using LLMs and diffusion models for text, image, and video generation.",
    icon: <FaBrain />,
    iconColorClass: "text-pink-500",
    hoverGlowColor: "rgba(236, 72, 153, 0.7)",
    headingColorClass: "text-indigo-400",
  },
  {
    title: "Python Developer",
    description:
      "Creates backend systems, APIs, and automation scripts using Python frameworks like FastAPI and Django.",
    icon: <FaPython />,
    iconColorClass: "text-yellow-400",
    hoverGlowColor: "rgba(234, 179, 8, 0.7)",
    headingColorClass: "text-cyan-400",
  },
  {
    title: "Web Developer",
    description:
      "Builds responsive, interactive web apps using Next.js, Tailwind CSS, and modern frontend stacks.",
    icon: <FaLaptopCode />,
    iconColorClass: "text-cyan-400",
    hoverGlowColor: "rgba(6, 182, 212, 0.7)",
    headingColorClass: "text-yellow-400",
  },
  {
    title: "Cloud Backend Developer",
    description:
      "Develops secure and scalable backend systems using cloud platforms like AWS, GCP, and Supabase.",
    icon: <FaServer />,
    iconColorClass: "text-indigo-400",
    hoverGlowColor: "rgba(129, 140, 248, 0.7)",
    headingColorClass: "text-pink-500",
  },
  {
    title: "Data & AI Consultant",
    description:
      "Transforms data into decisions using machine learning, analytics, and dashboard tools.",
    icon: <FaChartLine />,
    iconColorClass: "text-green-400",
    hoverGlowColor: "rgba(34, 197, 94, 0.7)",
    headingColorClass: "text-teal-400",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-6 md:pt-10 pb-12 px-4 sm:px-6 md:px-10 scroll-mt-20">
      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-300 text-sm sm:text-base md:text-lg font-bold uppercase mb-3 tracking-wider"
      >
        CRAFTED WITH INTELLIGENCE
      </motion.h3>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap justify-center items-center gap-3 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
      >
        <span>Services</span>
        <span className="italic font-serif font-bold text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
          Delivered
        </span>
      </motion.h2>

      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
