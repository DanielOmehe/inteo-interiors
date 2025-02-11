import InteoReusableBtn from "../utils/button";
import { Inteo } from "./inteo";
import InteoNavItem from "./navItem";
import InteoNavItems from "./navItems";
import { InteoItems } from "./navItems";

const navItems = [
  { path: "#about", name: "About" },
  { path: "#about", name: "Services" },
  { path: "#about", name: "Our work" },
];

const InteoNavbar = ({}) => {
  return (
    <nav className="flex itens-center justify-between px-36 py-8">
      <Inteo />
      <InteoItems>
        {" "}
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
