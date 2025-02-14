"use client"
import { useState } from "react";
import InteoReusableBtn from "../utils/button";
import { Inteo } from "./inteo";
import InteoNavItem from "./navItem";
import InteoNavItems from "./navItems";
import { InteoItems } from "./navItems";

const navItems = [
  { path: "#about", name: "About" },
  { path: "#services", name: "Services" },
  { path: "#work", name: "Our work" },
];

const InteoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileNav = () => {
    setIsOpen(true);
  }

  const closeMobileNav = () => {
    setIsOpen(false);
  }
  return (
    <nav className="md:px-8 md:py-6 sm:w-full sm:px-4 sm:py-4 flex items-center justify-between px-36 py-8">
      <Inteo />
      {isOpen && <MobileNav isOpen={isOpen} toggleNav={closeMobileNav} />}
      <InteoItems>
        <button onClick={openMobileNav} className="sm:block hidden" aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <InteoNavItems>
          {navItems.map((item, indx) => (
            <InteoNavItem key={indx} path={item.path}>
              {item.name}
            </InteoNavItem>
          ))}
        </InteoNavItems>
        <InteoReusableBtn>Contact Us</InteoReusableBtn>
      </InteoItems>
    </nav>
  );
};

export default InteoNavbar;