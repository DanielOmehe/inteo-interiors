import InteoReusableBtn from "../utils/button";
import { Inteo } from "./inteo";
import InteoNavItem from "./navItem";
import InteoNavItems from "./navItems";
import { InteoItems } from "./navItems";
import MobileNav from "./mobileNav";

const navItems = [
  { path: "#about", name: "About" },
  { path: "#about", name: "Services" },
  { path: "#about", name: "Our work" },
];

const InteoNavbar = ({}) => {
  return (
    <nav className="md:px-8 md:py-6 sm:w-full sm:px-4 sm:py-4 flex items-center justify-between px-36 py-8">
      <Inteo />
      <MobileNav />
      <InteoItems>
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
