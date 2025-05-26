import Image from "next/image";
import { FaPython } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type AppCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  github: string;
};

const PythonAppCard = ({ title, description, link, image, github }: AppCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-gray-800 border border-gray-400 to-gray-900 text-white rounded-xl overflow-hidden shadow-lg p-4 hover:shadow-pink-500/50 transition-all duration-300"
    >
     <div className="relative w-full h-60 mb-4 rounded-md p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 overflow-hidden border-0">
      <div className="relative w-full h-full rounded-md overflow-hidden bg-black">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>
    </div>

      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        <FaPython className="text-yellow-400" /> {title}
      </h3>

      <p className="text-sm text-gray-300 mb-3">{description}</p>

      <div className="flex items-center justify-between text-pink-400">
        <div className="flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-300"
          >
            View App
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
            title="GitHub Repository"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        <SiStreamlit className="text-red-500 text-xl" />
      </div>
    </motion.div>
  );
};

export default PythonAppCard;
