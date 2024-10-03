"use client";

import { motion } from "framer-motion";
import styles from "@/components/Card/Card.module.css";

export default function Navbar() {
  const menuItems = ["Home", "About", "Services", "Programs", "Contact"];

  return (
    <nav className="p-4 bg-[#e4e5e2] text-[#333] shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          className="text-3xl font-serif font-bold text-[#a0853f]" // Gold color for the logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bemian
        </motion.div>

        {/* Menu Items for large screens */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="relative px-3 py-2 rounded-md text-lg font-medium text-[#333]"
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

        {/* Get Started Button using .cardButton styles */}
        <button className={styles.cardButton}>Get Started</button>
      </div>
    </nav>
  );
}
