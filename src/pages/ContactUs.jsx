import React from "react";
import NavbarMenu from "@/components/Navbar";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";

const ContactUs = () => {
  return (
    <>
      <NavbarMenu />
      <BackgroundBeamsDemo />
      <div className="relative mt-[-250px] z-20">
        <AnimatedModalDemo />
      </div>
    </>
  );
};

export default ContactUs;
