'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence
} from 'framer-motion';

const CollaborationCard = () => {
  const containerSize = 500;
  const center = containerSize / 2; // 250px center coordinate
  const radius = 200;

  // Client image filenames (ensure these images exist in your public folder)
  const clientImages = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg'
  ];

  // One-two word comments for each client
  const comments = [
    "Awesome",
    "Brilliant",
    "Innovative",
    "Dynamic",
    "Passionate",
    "Creative",
    "Reliable",
    "Unique",
    "Inspiring"
  ];

  // Pre-calculate positions for client images along the circle.
  // We start at -90° so the first image is at the top.
  const clientPositions = Array.from({ length: clientImages.length }).map((_, index) => {
    const angle = (index * 360) / clientImages.length - 90;
    return {
      x: center + radius * Math.cos((angle * Math.PI) / 180),
      y: center + radius * Math.sin((angle * Math.PI) / 180)
    };
  });

  // Create a motion value for the rotating container.
  const rotation = useMotionValue(0);
  // Inverse rotation, so that each client image remains upright.
  const inverseRotation = useTransform(rotation, (v) => -v);

  // Cycle through comments (one per client image).
  const [activeComment, setActiveComment] = useState(0);
  // Duration for each comment (the full 360° rotation takes 20s)
  const periodMs = (20 / clientImages.length) * 1000;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveComment((prev) => (prev + 1) % clientImages.length);
    }, periodMs);
    return () => clearInterval(interval);
  }, [periodMs, clientImages.length]);

  // Define the variants for the comment’s magical animation.
  // It enters from above (initial), grows and becomes opaque (animate),
  // then continues downward and fades out (exit).
  const commentVariants = {
    initial: { y: -150, opacity: 0, scale: 0.8 },
    animate: { y: 100, opacity: 1, scale: 1.2, transition: { duration: 1.2, ease: 'easeOut' } },
    exit: { y: 250, opacity: 0, scale: 1, transition: { duration: 0.8, ease: 'easeIn' } }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-gray-900">
      {/* Rotating Container */}
      <motion.div
        className="relative"
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Rotating container for client images */}
        <motion.div
          className="absolute inset-0"
          style={{ rotate: rotation }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {clientPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div
                // Counter-rotate so the image stays upright.
                style={{ rotate: inverseRotation }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, type: 'spring' }}
              >
                <img
                  src={`/${clientImages[i]}`}
                  alt={`Client ${i + 1}`}
                  className="w-16 h-16 rounded-full border-2 border-purple-400 object-cover shadow-lg"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Center Profile (Remains Fixed) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-purple-400/30 overflow-hidden shadow-2xl transition-all"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.5 }}
          >
            <img
              src="/dani2.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Dynamic Comment Animation from the Upper Side */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComment}
            className="absolute left-1/2 z-50 -translate-x-1/2"
            variants={commentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              {comments[activeComment]}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Text Content (Heading, Description, Button) at the Bottom */}
      <div className="mt-8 text-center w-full max-w-md">
        <motion.h2
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Collaborative Approach
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Building success through transparent communication and shared vision.
        </motion.p>
      </div>
    </div>
  );
};

export default CollaborationCard;