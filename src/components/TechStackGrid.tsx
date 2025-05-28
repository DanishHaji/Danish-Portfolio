'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaLinux, FaStream,
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, SiShadcnui,
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma,
  SiZod, SiVercel, SiPostman, SiPnpm,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
  { name: 'NextJS', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
  { name: 'Shadcn', icon: <SiShadcnui className="text-purple-500" /> },
  { name: 'NodeJS', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-indigo-400" /> },
  { name: 'Zustand', icon: <FaStream className="text-orange-400" /> },
  { name: 'Zod', icon: <SiZod className="text-purple-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'Linux', icon: <FaLinux className="text-yellow-300" /> },
  { name: 'pnpm', icon: <SiPnpm className="text-yellow-400" /> },
];

const TechStackGrid = () => {
  return (
    <section className="py-16 px-6 relative">

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-300 text-xl font-bold uppercase mb-4 tracking-widest"
      >
        I constantly try to improve
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] mb-12"
      >
        <span>My </span>
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
          Tech Stack
        </span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 perspective-[1000px]">
    {skills.map((skill, index) => (
        <motion.div
        key={index}
        className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-pink-400/50 transition transform hover:scale-105 w-32 h-32"
        style={{
            transform: `rotateY(${index * 15}deg) rotateX(10deg) translateZ(50px)`,
        }}
        initial={{ opacity: 0, translateZ: -200 }}
        whileInView={{ opacity: 1, translateZ: 50 }}
        transition={{ delay: index * 0.05, duration: 0.6 }}
        >
        <div className="text-4xl mb-2">{skill.icon}</div>
        <p className="text-white text-sm font-medium">{skill.name}</p>
        </motion.div>
    ))}
    </div>

    </section>
  );
};

export default TechStackGrid;
