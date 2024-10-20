"use client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="relative w-full">
      {isMobile ? (
        <MobileNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      ) : (
        <Navbar />
      )}
    </div>
  );
}

function MobileNavbar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
    { item: "Home", href: "/" },
    { item: "About Us", href: "/about" },
    { item: "Gallery", href: "/gallery" },
    { item: "Donate Us", href: "/donate" },
    { item: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          SJA
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col pt-16"
          >
            <div className="flex flex-col p-4">
              {menuItems.map((menuItem, index) => (
                <Link
                  key={index}
                  to={menuItem.href}
                  className={cn(
                    "py-2 px-4 text-lg font-medium",
                    location.pathname === menuItem.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-200"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {menuItem.item}
                </Link>
              ))}
            </div>
            <Link to='/signIn' className="mt-auto mb-8 mx-4">
              <Button className="w-full">Sign In</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Navbar() {
  const location = useLocation();

  const menuItems = [
    { item: "Home", href: "/" },
    { item: "About Us", href: "/about" },
    { item: "Gallery", href: "/gallery" },
    { item: "Donate Us", href: "/donate" },
    { item: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            SJA
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((menuItem, index) => (
                <Link
                  key={index}
                  to={menuItem.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    location.pathname === menuItem.href
                      ? "bg-blue-600 text-white"
                      : "text-gray-800 hover:bg-blue-600 hover:text-white dark:text-gray-200 dark:hover:bg-blue-600"
                  )}
                >
                  {menuItem.item}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link to='/signIn'>
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
