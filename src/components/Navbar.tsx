"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = ["home", "about", "projects", "apps", "skills", "contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 w-full z-30 px-4 bg-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">

        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/danish.png"
            alt="Engr. Danish Logo"
            width={120}
            height={50}
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          />
        </div>

        {/* Desktop Center Nav */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl rounded-full px-8 py-2 shadow-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] border border-white/20">
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

        {/* Right: Mobile Menu Button */}
        <div className="lg:hidden">
          <button type="submit" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-md shadow-md border border-white/20 mx-4">
          <ul className="flex flex-col items-start gap-4 text-gray-200 font-semibold">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-white hover:scale-105 transition duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
