"use client"
import Link from "next/link";

const InteoNavItem = ({ path, children }) => {
  const handleScroll = (event, path) => {
    event.preventDefault();
    const targetElement = document.querySelector(path);
    console.log(targetElement);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <li>
      <Link href={path} onClick={(e) => handleScroll(e, path)}>{children}</Link>
    </li>
  );
};

export default InteoNavItem;
