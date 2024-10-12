"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import test from "@/assets/test.png";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              The second home for children <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Sikshan Jagruti Abhiyaan
              </span>
            </h1>
          </>
        }
      >
        {/* Responsive Image Container */}
        <div className="relative mx-auto max-w-[700px] w-full">
          <img
            src={test}
            alt="hero"
            className="w-full h-auto max-h-[1400px] object-contain rounded-2xl"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
