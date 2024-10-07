import React from "react";
import NavbarMenu from "@/components/Navbar";
//import { StickyScrollRevealDemo } from "@/components/Scroll";
import { GlobeDemo } from "@/components/GlobeDemo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";

const Home = () => {
  return (
    <>
      <NavbarMenu />
      <GlobeDemo />
      <AppleCardsCarouselDemo />
    </>
  );
};

export default Home;
