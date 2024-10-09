import React from "react";
import NavbarMenu from "@/components/Navbar";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

const Gallery = () => {
  return (
    <>
      <NavbarMenu />

      <div className="text-center my-16">
        <h2 className="text-2xl md:text-5xl font-bold text-black dark:text-white mb-6">
          Our Story in a Nutshell
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl mx-auto mb-10">
          "Shikshan Jagruti Abhiyaan’s journey is a testament to our commitment to empowering children through education. From humble beginnings to a growing movement, we have been dedicated to providing free tuition, skill development, and holistic child growth. Here's a look at the milestones that shaped our story and continue to inspire our mission for a brighter future."
        </p>
      </div>

      <InfiniteMovingCardsDemo/>
      <AnimatedModalDemo />
    </>
  );
};

export default Gallery;
