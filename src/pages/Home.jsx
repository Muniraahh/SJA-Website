import React from "react";
import NavbarMenu from "@/components/Navbar";
import { GlobeDemo } from "@/components/GlobeDemo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";

const Home = () => {
  return (
    <>
      <NavbarMenu />
      <GlobeDemo />
      <AppleCardsCarouselDemo />
      <AnimatedModalDemo />
    </>
  );
};

export default Home;
