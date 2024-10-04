"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // FontAwesome icons
import styles from "@/components/Card/Card.module.css"; // Assuming this has your button styles
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuItems = ["Home", "About", "Services", "Programs", "Contact"];
  const menuItems = [
    {
      nav: "Home",
      path: "/",
    },
    {
      nav: "About",
      path: "/about-us",
    },
    {
      nav: "Services",
      path: "/services",
    },
    {
      nav: "Programs",
      path: "/programs",
    },
    {
      nav: "Contact",
      path: "/contact-us",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  return (
    <nav className="p-4 bg-[#e4e5e2] text-[#333] shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          className="text-3xl font-serif font-bold text-[#a0853f]" // Gold color for the logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GutsHealth
        </motion.div>

        {/* Menu Items for large screens */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ nav, path }) => (
            <Link to={path} key={nav}>
              <motion.a
                href="#"
                className="relative px-3 py-2 rounded-md text-lg font-medium text-[#333]"
                whileHover={{ scale: 1.1 }}
                initial="hidden"
                animate="visible"
              >
                {nav}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a0853f]" // Gold underline on hover
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </Link>
          ))}
        </div>

        {/* Get Started Button for large screens */}
        <button className={`hidden md:block ${styles.cardButton}`}>
          Get Started
        </button>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={styles.cardButton}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            {/* Toggle between FaBars and FaTimes */}
          </button>
        </div>
      </div>

      {/* Full Screen Overlay Menu for Mobile */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-cards text-[#e4e5e2] z-[999999999999] flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Menu items in mobile view */}
          <motion.div
            className="flex flex-col items-center space-y-6 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-3xl font-semibold text-[#a0853f]"
                whileHover={{ scale: 1.2 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Get Started Button for mobile view */}
            <button className={`${styles.cardButton}`}>Get Started</button>
          </motion.div>

          {/* Cross icon appears in the top-right corner in mobile view when the menu is open */}
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu}>
              <FaTimes size={24} className="text-[#a0853f]" />
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
