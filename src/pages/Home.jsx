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
      <div className="flex items-center justify-between mt-10 px-4">
        {/* CoverDemo */}
        <div className="w-3/4">
          <CoverDemo />
        </div>

        {/* Logo */}
        <div className="w-1/4 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-56 h-56 object-contain"
          />
        </div>
      </div>

      {/* Picture Section */}
      <div className="flex justify-center mt-10">
        <div className="transition-all duration-300 border-2 border-gray-300 dark:border-white/[0.2] shadow-input hover:border-indigo-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)] rounded-lg w-[800px] h-[800px] flex justify-center items-center">
          <img
            src={grppic}
            alt="Header Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Apple Cards and Modal Section */}
      <div className="relative z-20 mt-[-70px]">
        <AppleCardsCarouselDemo />
      </div>

      <div className="relative mt-[-350px] z-20">
        <AnimatedModalDemo />
      </div>
    </>
  );
};

export default Home;
