"use client";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";

export default function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto z-40 flex items-center justify-between gap-4", // Align items horizontally
        className
      )}
    >
      {/* Navbar Menu Items */}
      <Menu className="flex  items-center gap-4">
        <MenuItem currentPath={location.pathname} item="Home" href="/" />
        <MenuItem currentPath={location.pathname} item="About Us" href="/about" />
        <MenuItem currentPath={location.pathname} item="Gallery" href="/gallery" />
        <MenuItem currentPath={location.pathname} item="Donate Us" href="/donate" />
        <MenuItem currentPath={location.pathname} item="Contact Us" href="/contact" />
      </Menu>

      {/* Sign In Button */}
      <Link to='/signIn'>
      <Button className="rounded-full">Sign In</Button>
      </Link>
    </div>
  );
}
