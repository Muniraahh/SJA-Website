"use client";
import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to track the current path
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const location = useLocation(); // Get the current location (path)

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-md mx-auto z-40",
        className
      )}
    >
      <Menu>
        <MenuItem
          currentPath={location.pathname} // Pass the current path to the menu item
          item="Home"
          href="/"
        />
        <MenuItem
          currentPath={location.pathname}
          item="About Us"
          href="/about"
        />
        <MenuItem
          currentPath={location.pathname}
          item="Gallery"
          href="/gallery"
        />
        <MenuItem
          currentPath={location.pathname}
          item="Donate Us"
          href="/donate"
        />
        <MenuItem
          currentPath={location.pathname}
          item="Contact Us"
          href="/contact"
        />
      </Menu>
    </div>
  );
}
