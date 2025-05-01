"use client";

import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

const navItems = ["home", "about", "projects", "apps", "skills", "contact"];

export default function Navbar() {
  return (
    <nav className="fixed left-0 w-full z-30 px-4">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Left: Logo */}
        <div className="flex items-center ml-[-80px]"> {/* Adjusted margin to move left */}
          <Image
            src="/danish.png" // Ensure your logo is saved correctly in the public folder
            alt="Engr. Danish Logo"
            width={150} // Adjust width as needed
            height={50} // Adjust height as needed
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          />
        </div>

        {/* Center: Navigation Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl rounded-full px-8 py-2 shadow-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                border border-white/20 transition duration-300">

          <ul className="flex gap-4 md:gap-12 text-gray-300 text-sm md:text-base font-semibold">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  className="hover:text-white hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}