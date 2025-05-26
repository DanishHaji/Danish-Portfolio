'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFramer,
} from 'react-icons/si';

type Project = {
  title: string;
  image: string;
  descriptions: string[];
  technologies: string[];
  github: string;
  vercel: string;
  bgColor: string;
};

const projects: Project[] = [
  {
    title: 'Next-Gen Personal Portfolio',
    image: '/Projects/Project 1.png',
    descriptions: [
      'Built a modern personal portfolio with animated transitions.',
      'Showcases skills, resume, and project links.',
      'Designed using Framer Motion and Tailwind CSS.',
      'Deployed live with Vercel for global access.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourname/portfolio',
    vercel: 'https://yourportfolio.vercel.app/',
    bgColor: 'bg-purple-900 bg-opacity-30',
  },
  {
    title: 'Enterprise AI Agents — Landing Experience',
    image: '/Projects/Project 2.png',
    descriptions: [
      'Designed an engaging UI for AI services.',
      'Built responsive sections with smooth scroll.',
      'Highlights AI features and pricing plans.',
      'Deployed using Vercel with fast performance.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourname/ai-landing',
    vercel: 'https://ai-agents.vercel.app/',
    bgColor: 'bg-blue-900 bg-opacity-30',
  },
  {
    title: 'CARA — Stylish E-Commerce Experience',
    image: '/Projects/Project 3.png',
    descriptions: [
      'Built a visually appealing online store layout.',
      'Fully responsive design with custom CSS.',
      'Interactive hover effects and product grid.',
      'Optimized for user experience on all devices.',
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourname/cara-ecommerce',
    vercel: 'https://cara-store.vercel.app/',
    bgColor: 'bg-pink-900 bg-opacity-30',
  },
  {
    title: 'Morent — Hackathon Car Rental Platform',
    image: '/Projects/Project 4.png',
    descriptions: [
      'Hackathon project completed in 48 hours.',
      'Used animations and dynamic routes.',
      'Vehicle search, filters, and booking system.',
      'Collaborative project using Git and Next.js.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourname/morent-hackathon',
    vercel: 'https://morent-rental.vercel.app/',
    bgColor: 'bg-green-900 bg-opacity-30',
  },
  {
    title: 'Morent Admin Dashboard — Rental Fleet Management',
    image: '/Projects/Project 5.png',
    descriptions: [
      'Developed admin dashboard for managing rental vehicle inventory.',
      'Includes analytics for bookings, availability, and users.',
      'Clean and intuitive UI for streamlined operations.',
      'Secure and responsive design using Next.js and Tailwind CSS.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourname/weather-app',
    vercel: 'https://weather-app.vercel.app/',
    bgColor: 'bg-sky-900 bg-opacity-30',
  },
  {
    title: 'ClassyShope — Dynamic E-Commerce Showcase',
    image: '/Projects/Project 6.png',
    descriptions: [
      'Created a sleek e-commerce frontend for premium products.',
      'Features product listings, filters, and interactive UI elements.',
      'Fully responsive and optimized for performance.',
      'Modern styling with Tailwind CSS and React components.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourname/todo-app',
    vercel: 'https://todo-list.vercel.app/',
    bgColor: 'bg-indigo-900 bg-opacity-30',
  },
  {
    title: 'Dani’s Blog — Interactive Content Hub',
    image: '/Projects/Project 7.png',
    descriptions: [
      'Personal blog platform with dynamic article rendering.',
      'Supports categorized posts, tags, and search functionality.',
      'Built for smooth reading experience and fast performance.',
      'Styled using Tailwind CSS with React and TypeScript.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourname/countdown-timer',
    vercel: 'https://countdown-app.vercel.app/',
    bgColor: 'bg-yellow-900 bg-opacity-30',
  },
  {
    title: 'Exclusive Store — Premium Shopping Web App',
    image: '/Projects/Project 8.png',
    descriptions: [
      'Premium online shopping experience for exclusive items.',
      'Showcases luxury products with animations and hover effects.',
      'Built using Next.js, React, and Framer Motion for rich UI.',
      'Responsive and optimized for mobile and desktop devices.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourname/birthday-wish-app',
    vercel: 'https://birthday-wish.vercel.app/',
    bgColor: 'bg-red-900 bg-opacity-[10px]',
  },
];

const techIcons: { [key: string]: React.ReactNode } = {
  TypeScript: <SiTypescript className="inline mr-1" />,
  JavaScript: <SiJavascript className="inline mr-1" />,
  React: <SiReact className="inline mr-1" />,
  'Next.js': <SiNextdotjs className="inline mr-1" />,
  'Tailwind CSS': <SiTailwindcss className="inline mr-1" />,
  HTML: <SiHtml5 className="inline mr-1" />,
  CSS: <SiCss3 className="inline mr-1" />,
  'Framer Motion': <SiFramer className="inline mr-1" />,
};

const techColors: { [key: string]: string } = {
  TypeScript: 'bg-blue-600',
  JavaScript: 'bg-yellow-400 text-black',
  React: 'bg-cyan-500',
  'Next.js': 'bg-gray-800',
  'Tailwind CSS': 'bg-teal-400 text-black',
  HTML: 'bg-orange-600',
  CSS: 'bg-blue-500',
  'Framer Motion': 'bg-purple-600',
};

const ProjectShowcase = () => {
  return (
    <div className="space-y-20 p-6 pt-16">
      {/* Section Heading */}
        <div id="projects" className="text-center mb-10 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-sm font-bold uppercase tracking-widest"
          >
            FEATURED CASE STUDIES
          </motion.h3>

         <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-6xl font-bold flex justify-center items-center gap-2 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        >
          <span>Curated</span>
          <span
            className="italic font-serif font-bold text-4xl md:text-7xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent"
          >
            work
          </span>
        </motion.h2>
        </div>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 p-6 rounded-2xl shadow-xl border-8 border-gray-900 outline-1 outline-purple-300 ${project.bgColor}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {isEven ? (
              <>
                <motion.a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 rounded-xl overflow-hidden"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full object-cover rounded-xl border-2 border-transparent"
                  />
                </motion.a>
                <div className="text-white w-full md:w-1/2 space-y-4">
                  <h2 className="text-3xl font-bold text-center text-purple-300">{project.title}</h2>
                  <ul className="list-disc list-inside space-y-2 text-purple-100">
                    {project.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300 hover:text-white transition"
                  >
                    <FaGithub className="text-3xl" />
                    <span>Source Code...</span>
                  </a>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md border border-white flex items-center gap-1 ${techColors[tech] || 'bg-purple-700'}`}
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-white w-full md:w-1/2 space-y-4 order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-center text-purple-300">{project.title}</h2>
                  <ul className="list-disc list-inside space-y-2 text-purple-100">
                    {project.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300 hover:text-white transition"
                  >
                    <FaGithub className="text-3xl" />
                    <span>Source Code...</span>
                  </a>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md border border-white flex items-center gap-1 ${techColors[tech] || 'bg-purple-700'}`}
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 rounded-xl overflow-hidden order-1 md:order-2"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full object-cover rounded-xl border-2 border-transparent"
                  />
                </motion.a>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectShowcase;
