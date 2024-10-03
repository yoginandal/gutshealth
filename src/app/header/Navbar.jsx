"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = ["Home", "About", "Services", "Contact"];

  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-current transition ease transform duration-300`;

  return (
    <nav
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-black text-[#e4e5e2]"
      }`}
    >
      <div className="container mx-auto icon-circle">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            className="text-2xl font-bold text-[#a0853f]" // Gold color for the logo
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Logo
          </motion.div>

          {/* Menu Items for large screens */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="relative px-3 py-2 rounded-md text-lg font-medium text-[#e4e5e2]"
                whileHover={{ scale: 1.1 }}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }),
                }}
                initial="hidden"
                animate="visible"
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a0853f]" // Gold underline on hover
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle & Hamburger Menu for mobile */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 rounded-full text-[#a0853f]"
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
            <motion.button
              className="md:hidden flex flex-col h-12 w-12 rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-2.5 opacity-100 bg-[#a0853f]"
                    : "opacity-100 bg-[#e4e5e2]"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-100 bg-[#e4e5e2]"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-2.5 opacity-100 bg-[#a0853f]"
                    : "opacity-100 bg-[#e4e5e2]"
                }`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="mt-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="block py-2 px-4 text-lg hover:bg-[#a0853f] text-[#e4e5e2] rounded-md" // Gold hover for mobile
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
