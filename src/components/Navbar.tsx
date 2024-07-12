"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="relative w-fullflex items-center justify-center">
      <NavbarM className="top-2" />
    </div>
  );
}

function NavbarM({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-center items-center", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/signin">SignIn</HoveredLink>
        <HoveredLink href="/signup">SignUp</HoveredLink>
      </Menu>
    </div>
  );
}
