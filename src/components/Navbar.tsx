"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const  [isSignedIn, setSignedIn] = useState<boolean>(false);
  const [signOut, setSignOut] = useState<string>('SignIn')
  const [url, setUrl] = useState<string>('')
  useEffect(()=>{
    setUrl(window.location.href)
    if(url[url.length - 1] === 'r') {
      setSignedIn(true)
      setSignOut('SignOut')
    }
  },[url,isSignedIn,signOut])

  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarMenu className="top-2" isSignedIn={isSignedIn} signOut={signOut} />
    </div>
  );
}

function NavbarMenu({ className, isSignedIn, signOut }: { className?: string; isSignedIn?: boolean, signOut?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-center items-center", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href={isSignedIn ? "/signout" : "/signin"}>
          {signOut}
        </HoveredLink>
        <HoveredLink href="/signup">Sign Up</HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
