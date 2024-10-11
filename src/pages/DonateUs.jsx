import React from "react";
import NavbarMenu from "@/components/Navbar";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";
import { GlobeDemo } from "@/components/GlobeDemo";

const DonateUs = () => {
  return (
    <>
      <NavbarMenu />
      <GlobeDemo />
      <div className="relative mt-[-350px] z-20">
        <AnimatedModalDemo />
      </div>
    </>
  );
};

export default DonateUs;
