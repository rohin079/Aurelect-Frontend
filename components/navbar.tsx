"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/whatsapp.png"
              alt="Logo"
              className="h-10 w-auto"
            />
            <h1 className="ml-3 text-xl font-semibold text-gray-900">
              Aurelect Advisory
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {Object.entries({
              Home: "/",
              Services: "/services",
              About: "/about",
              Contact: "/contact",
              }).map(([label, path]) => (
              <li key={label}>
                <Link
                href={path}
                className="text-gray-600 hover:text-gray-900 transition-colors relative group"
                >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </Link>
              </li>
              ))}
            </ul>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;