'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

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
      'Real-time weather information using OpenWeather API.',
      'Displays temperature, humidity, and forecast.',
      'Responsive UI with clean visuals.',
      'Built with Next.js and deployed on Vercel.',
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
      'Simple and elegant to-do list with local storage.',
      'Add, delete, and mark tasks as completed.',
      'Uses functional React hooks and state management.',
      'Deployed and fully mobile-friendly.',
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
      'Stylish countdown timer for events.',
      'Live updating time with days, hours, minutes, and seconds.',
      'Good for launches, birthdays, or deadlines.',
      'Built using React and Tailwind CSS.',
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
      'Create beautiful animated birthday wishes.',
      'Allows customizing text and colors.',
      'Animations handled with Framer Motion.',
      'Interactive, fun, and user-friendly app.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourname/birthday-wish-app',
    vercel: 'https://birthday-wish.vercel.app/',
    bgColor: 'bg-red-900 bg-opacity-[10px]',
  },
];

const techColors: { [key: string]: string } = {
  'TypeScript': 'bg-blue-600',
  'JavaScript': 'bg-yellow-400 text-black',
  'React': 'bg-cyan-500',
  'Next.js': 'bg-gray-800',
  'Tailwind CSS': 'bg-teal-400 text-black',
  'HTML': 'bg-orange-600',
  'CSS': 'bg-blue-500',
  'Framer Motion': 'bg-purple-600',
};

const ProjectShowcase = () => {
  return (
    <div className="space-y-20 p-6">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] ${project.bgColor}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Conditional Layout */}
            {isEven ? (
              <>
                {/* Left - Image */}
                <motion.a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 relative group"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl shadow-lg transition duration-300 ease-in-out"
                    whileHover={{
                      rotate: [0, 1, -1, 0],
                      transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  />
                </motion.a>

                {/* Right - Text */}
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
                    <FaGithub className="text-xl" />
                    <span>GitHub Repo</span>
                  </a>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md border border-white ${
                          techColors[tech] || 'bg-purple-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Right - Text */}
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
                    <FaGithub className="text-xl" />
                    <span>GitHub Repo</span>
                  </a>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md border border-white ${
                          techColors[tech] || 'bg-purple-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Left - Image */}
                <motion.a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 relative group order-1 md:order-2"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl shadow-lg transition duration-300 ease-in-out"
                    whileHover={{
                      rotate: [0, 1, -1, 0],
                      transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
                    }}
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
