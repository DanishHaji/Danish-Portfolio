'use client';
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconColorClass: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  iconColorClass,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`
        group rounded-lg p-6 bg-gray-900 border border-gray-700 
        hover:shadow-[0_0_30px] hover:${iconColorClass}/50 
        transition-all duration-300 ease-in-out 
        text-white backdrop-blur-sm
      `}
    >
      <div className={`text-4xl mb-4 transition-colors duration-300 ${iconColorClass}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
