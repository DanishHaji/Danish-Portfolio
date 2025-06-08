'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaLinux, FaStream, FaPython,
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, SiShadcnui,
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma,
  SiZod, SiVercel, SiPostman, SiPnpm,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, category: 'Front-end' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, category: 'Front-end' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, category: 'Front-end' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, category: 'Front-end' },
  { name: 'Python', icon: <FaPython className="text-yellow-300" />, category: 'Front-end' },
  { name: 'ReactJS', icon: <FaReact className="text-cyan-400" />, category: 'Front-end' },
  { name: 'NextJS', icon: <SiNextdotjs className="text-white" />, category: 'Front-end' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, category: 'Front-end' },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, category: 'Front-end' },
  { name: 'Shadcn', icon: <SiShadcnui className="text-purple-500" />, category: 'Front-end' },
  { name: 'NodeJS', icon: <FaNodeJs className="text-green-500" />, category: 'Back-end' },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-300" />, category: 'Back-end' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, category: 'Back-end' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" />, category: 'Back-end' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" />, category: 'Back-end' },
  { name: 'Prisma', icon: <SiPrisma className="text-indigo-400" />, category: 'Back-end' },
  { name: 'Zustand', icon: <FaStream className="text-orange-400" />, category: 'State Management' },
  { name: 'Zod', icon: <SiZod className="text-purple-600" />, category: 'Validation' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, category: 'Tools' },
  { name: 'GitHub', icon: <FaGithub className="text-white" />, category: 'Tools' },
  { name: 'Vercel', icon: <SiVercel className="text-white" />, category: 'Tools' },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" />, category: 'Tools' },
  { name: 'pnpm', icon: <SiPnpm className="text-yellow-400" />, category: 'Tools' },
  { name: 'Java', icon: <FaJava className="text-red-600" />, category: 'Languages' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, category: 'Languages' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, category: 'Languages' },
  { name: 'Python', icon: <FaPython className="text-yellow-300" />, category: 'Languages' },
];

const categoriesOrder = [
  'Front-end',
  'Back-end',
  'State Management',
  'Validation',
  'Tools',
  'Languages',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "circOut" }
  }
};

const TechStackGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [isClient, setIsClient] = useState(false);
  const [particleStyles, setParticleStyles] = useState<{ width: number; height: number; top: number; left: number; duration: number }[]>([]);
  const [shootingStarStyles, setShootingStarStyles] = useState<{ top: number; left: number; duration: number; delay: number; repeatDelay: number }[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsClient(true);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = canvas.parentElement;
    if (!container) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resizeCanvas();

    // Create stars
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number; angle: number }[] = [];
    const starCount = 200; // Fixed number for better performance
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05,
        angle: Math.random() * Math.PI * 2
      });
    }

    // Animation function
    const animateStars = () => {
      ctx.fillStyle = 'rgba(15, 15, 25, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.closePath();

        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fill();

        star.opacity += Math.sin(Date.now() * 0.001 + star.angle) * 0.05; // Smoother twinkling
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      animationRef.current = requestAnimationFrame(animateStars);
    };

    animateStars();

    // Handle resize
    const handleResize = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeCanvas();
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05,
          angle: Math.random() * Math.PI * 2
        });
      }
      animateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    // Generate particle styles
    const generatedParticles = Array.from({ length: 15 }, () => ({
      width: Math.random() * 200 + 50,
      height: Math.random() * 200 + 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5 // Reduced max duration for smoother animation
    }));
    setParticleStyles(generatedParticles);

    // Generate shooting star styles
    const generatedShootingStars = Array.from({ length: 4 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 1 + Math.random() * 1, // Reduced duration for faster, smoother motion
      delay: Math.random() * 5,
      repeatDelay: Math.random() * 10
    }));
    setShootingStarStyles(generatedShootingStars);
  }, [isClient]);

  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  // Reset transform on mouse leave
  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Canvas container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Large floating particles */}
      {particleStyles.map((style, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
            width: `${style.width}px`,
            height: `${style.height}px`,
            top: `${style.top}%`,
            left: `${style.left}%`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: style.duration,
            repeat: Infinity,
            ease: "circInOut" // Smoother easing
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStarStyles.map((style, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${style.top}%`,
            left: `${style.left}%`,
            width: '0px',
            opacity: 0,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
          animate={{
            width: ['0px', '100px', '0px'],
            opacity: [0, 0.8, 0],
            left: ['0%', '100%']
          }}
          transition={{
            duration: style.duration,
            delay: style.delay,
            repeat: Infinity,
            repeatDelay: style.repeatDelay,
            ease: "linear" // Constant speed for smoother motion
          }}
        />
      ))}

      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-300 text-xl font-medium mb-4 tracking-widest"
          >
            CONSTANTLY EVOLVING, ALWAYS LEARNING
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-4">
              <span>My </span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto text-gray-400 mt-6"
          >
            Technologies I've mastered and continue to expand upon. Each category showcases my expertise in different areas of modern web development.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categoriesOrder.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);

            return (
              <motion.div 
                key={category}
                className="w-full"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-2xl overflow-hidden">
                  <div className="p-6 h-full">
                    {/* Category Heading */}
                    <motion.div 
                      className="flex items-center justify-center mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mr-3 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent flex-grow max-w-[100px]" />
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-center">
                        {category}
                      </h3>
                      <div className="ml-3 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent flex-grow max-w-[100px]" />
                    </motion.div>

                    {/* Skill Cards */}
                    <motion.div 
                      className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                      variants={containerVariants}
                    >
                      {categorySkills.map((skill, i) => (
                        <motion.div
                          key={`${skill.name}-${i}`}
                          className="flex flex-col items-center justify-center
                                     bg-gradient-to-br from-gray-800/50 to-gray-900/50
                                     border border-gray-700 rounded-xl p-4
                                     hover:shadow-[0_0_20px_5px] hover:shadow-purple-500/30
                                     transition-all duration-200 ease-out
                                     relative overflow-hidden group"
                          variants={itemVariants}
                          whileHover={{ 
                            y: -5,
                            scale: 1.05,
                            borderColor: 'rgba(192, 132, 252, 0.5)',
                            boxShadow: '0 0 20px 5px rgba(192, 132, 252, 0.3)'
                          }}
                          ref={(el) => { cardRefs.current[categoriesOrder.indexOf(category) * categorySkills.length + i] = el; }}
                          onMouseMove={(e) => handleMouseMove(e, categoriesOrder.indexOf(category) * categorySkills.length + i)}
                          onMouseLeave={() => handleMouseLeave(categoriesOrder.indexOf(category) * categorySkills.length + i)}
                        >
                          <div className="text-2xl sm:text-3xl mb-2 z-10 group-hover:scale-110 transition-transform duration-200">
                            {skill.icon}
                          </div>
                          <p className="text-gray-200 text-xs text-center font-medium z-10">
                            {skill.name}
                          </p>
                          
                          {/* Hover effect background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          
                          {/* Floating animation */}
                          <motion.div 
                            className="absolute inset-0 rounded-xl"
                            animate={{
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 2 + Math.random() * 1, // Reduced for more dynamic effect
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            Continuously expanding my tech stack to build better, faster, and more efficient applications
          </p>
          <div className="mt-4 flex justify-center">
            <motion.div 
              className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackGrid;