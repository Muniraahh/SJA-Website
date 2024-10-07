import React from "react";
import NavbarMenu from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { TimelineDemo } from "@/components/TimelineDemo";

const AboutUs = () => {
  return (
    <>
      <NavbarMenu />
      <HeroScrollDemo />
      <TimelineDemo />
      {/* You can add more content related to the Home page here */}
    </>
  );
};

export default AboutUs;
