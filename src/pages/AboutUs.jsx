import React from "react";
import NavbarMenu from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { TimelineDemo } from "@/components/TimelineDemo";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";

const AboutUs = () => {
  return (
    <>
      <NavbarMenu />

      <div className="relative mt-[-150px] z-10">
        <HeroScrollDemo />
      </div>

      <div className="relative mt-[-200px] z-20">
        <TimelineDemo />
      </div>
      
      <div className="relative mt-[-300px] z-20">
        <AnimatedModalDemo />
      </div>
    </>
  );
};
export default AboutUs;
