"use client";
import Link from "next/link";
import logo from "../../public/NavLogo-2.jpg";
import Image from "next/image";
import React, { useState, useCallback } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header id="navbar" className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto w-full container sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              className={`${menuOpen ? "h-20" : "h-20"}`}
              src={logo}
              alt="Uplifting Adult Day Center Logo"
              width={140}
              height={80}
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 hover:text-red-600 focus:outline-none"
        >
          {menuOpen ? (
            <span className="fas fa-times text-4xl me-8"></span> // "X" icon
          ) : (
            <span className="fas fa-bars text-4xl me-8"></span> // Hamburger icon
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 font-montserrat font-semibold items-center absolute lg:static top-20 pb-6 right-0 w-full lg:w-auto bg-white lg:bg-transparent z-10`}
        >
          {/* Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 pt-5 px-6 lg:px-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-red-600 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-red-600 py-2"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="text-gray-700 hover:text-red-600 py-2"
            >
              Services
            </Link>
            <Link
              href="/career"
              onClick={closeMenu}
              className="text-gray-700 hover:text-red-600 py-2"
            >
              Career
            </Link>
            <Link
              href="/resources"
              onClick={closeMenu}
              className="text-gray-700 hover:text-red-600 py-2"
            >
              Resources
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 pt-5 lg:space-x-4 px-6 lg:px-0 mt-4 lg:mt-0">
            <div className=" bg-gray-800 font-montserrat font-semibold text-sm text-white px-4 py-2 rounded-full hover:bg-gray-700 w-fit">
              <a href="tel:+1-626-232-1582" className="phone "> Call Us {"    "}
              213-809-4306{" "}
              </a>
            </div>
            <Link href="/contact" onClick={closeMenu}>
              <button className="bg-uRed text-sm font-montserrat font-semibold text-white px-4 py-2 rounded-full hover:bg-red-500">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
