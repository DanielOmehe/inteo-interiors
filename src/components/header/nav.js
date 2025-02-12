
import {useState} from "react"
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
  return (
    <nav className="md:px-8 md:py-6 sm:w-full sm:px-4 sm:py-4 flex items-center justify-between px-36 py-8">
      <Inteo />
      <InteoItems>
        <InteoNavItems>
          {navItems.map((item, indx) => (
            <InteoNavItem key={indx} path={item.path} >
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
