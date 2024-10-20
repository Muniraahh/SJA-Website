import React from "react";
import NavbarMenu from "@/components/Navbar";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";
import grppic from "@/assets/grppic.jpg";
import logo from "@/assets/logo.jpg";
import { CoverDemo } from "@/components/CoverDemo";

const Home = () => {
  return (
    <>
      <NavbarMenu />

      {/* CoverDemo and Logo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* CoverDemo */}
          <div className="w-full md:w-2/3">
            <CoverDemo />
          </div>

          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Picture Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="transition-all duration-300 border-2 border-gray-300 dark:border-white/[0.2] shadow-input hover:border-indigo-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)] rounded-lg overflow-hidden">
          <img
            src={grppic}
            alt="Header Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Apple Cards and Modal Section */}
      <div className="mt-20">
        <AppleCardsCarouselDemo />
      </div>

      <div className="mt-20">
        <AnimatedModalDemo />
      </div>
    </>
  );
};

export default Home;
