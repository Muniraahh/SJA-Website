import React from "react";
import NavbarMenu from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { TimelineDemo } from "@/components/TimelineDemo";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";

const AboutUs = () => {
  return (
    <>
      <NavbarMenu />
      <HeroScrollDemo />
      <TimelineDemo />
      <AnimatedModalDemo />
    </>
  );
};

export default AboutUs;
