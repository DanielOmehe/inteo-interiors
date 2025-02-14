import Link from "next/link";

const MobileNav = ({ isOpen, toggleNav }) => {
  return (
    <div
      className={`w-screen h-3/4 px-12 py-12 fixed top-0 left-0 transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 bg-white z-50`}
    >
      <button className="close-btn" onClick={toggleNav}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="flex flex-col items-center gap-8 mt-16">
        <li>
          <Link className="text-xl" href="#about" onClick={toggleNav}>
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="text-xl" onClick={toggleNav}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#work" className="text-xl" onClick={toggleNav}>
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
=======
