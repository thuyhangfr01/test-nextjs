"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { LOCAL_STORAGE } from "@/constants";
import { removeItemLocalStorage } from "@/lib/utils";

const NavBar = () => {
  const handleLogout = () => {
    removeItemLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="#">
            <span className="sr-only">Digital Forstress</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/projects"
            >
              Projects
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" onClick={() => handleLogout()}>
              Logout
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
