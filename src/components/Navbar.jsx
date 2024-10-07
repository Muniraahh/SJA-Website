"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-40", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <Link to="/about" className="text-gray-800 hover:text-blue-500">About Us</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Gallery">
          <Link to="/gallery" className="text-gray-800 hover:text-blue-500">Gallery</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Donate Us">
          <Link to="/donate" className="text-gray-800 hover:text-blue-500">Donate Us</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <Link to="/contact" className="text-gray-800 hover:text-blue-500">Contact Us</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
