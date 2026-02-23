"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import { Inter } from "next/font/google";
import Logo from "@/assets/logo.svg";

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: "600",
});

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 w-full border-b-2 border-gray-200 bg-brand-beige ${interSemiBold.className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:flex md:items-center md:justify-between lg:px-6">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <Image src={Logo} alt="Logo" className="h-10 w-auto sm:h-12 rounded-lg" priority width={60} height={60} />
              <h2 className="text-lg leading-none font-bold sm:text-xl">DevPortfolio</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen items-center justify-center md:flex md:h-auto md:gap-6">
              <li className="text-center text-md py-2 px-6 md:px-0 border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
              <li className="text-center text-md py-2 px-6 md:px-0 border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className="text-center text-md py-2 px-6 md:px-0 border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
              <li className="text-center text-xl py-2 px-6 md:px-0 border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Button
                  variant="solid"
                  size="sm"
                  onClick={() => setNavbar(!navbar)}
                >
                  Download CV
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
