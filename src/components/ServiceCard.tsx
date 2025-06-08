import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconColorClass?: string;
  hoverGlowColor?: string;
  headingColorClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  iconColorClass = "text-white",
  hoverGlowColor = "rgba(255, 255, 255, 0.7)",
  headingColorClass,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-gray-900 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-gray-700 w-full"
      style={{
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 12px 4px ${hoverGlowColor}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      <div
        className={`text-3xl sm:text-4xl mb-3 sm:mb-4 ${iconColorClass} transition-transform group-hover:scale-110`}
      >
        {icon}
      </div>
      <h3
        className={`text-lg sm:text-xl font-semibold mb-1 sm:mb-2 ${headingColorClass}`}
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
