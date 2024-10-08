"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const MenuItem = ({ currentPath, item, href }) => {
  const isActive = currentPath === href; // Check if the current path matches the href

  return (
    <div className="relative">
      <Link to={href}>
        <motion.p
          initial={{ color: isActive ? "blue" : "gray" }} // Set initial color based on active state
          whileHover={!isActive ? { color: "blue" } : {}} // Hover effect if not active
          transition={{ duration: 0.3 }}
          className={`cursor-pointer text-gray-800 dark:text-white 
            ${isActive ? "text-blue-500 border-b-2 border-indigo-500" : ""} 
            border-transparent`} // Keep active title blue with border
        >
          {item}
        </motion.p>
      </Link>
    </div>
  );
};

export const Menu = ({ children }) => {
  return (
    <nav
      className="relative rounded-full border-2 border-gray-300 dark:border-white/[0.2] 
                  bg-white dark:bg-black shadow-input flex justify-center 
                  space-x-4 px-6 py-2 transition-all duration-300 
                  hover:border-indigo-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)]"
    >
      {children}
    </nav>
  );
};
