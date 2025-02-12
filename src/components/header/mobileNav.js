"use client";
import React, { useState } from 'react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sm:fixed sm:w-full sm:h-auto sm:p-12 sm:bg-black">
            <button
                className="text-white focus:outline-none"
                onClick={toggleNav}
            >
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
            {isOpen && (
                <div className="absolute top-0 left-0 w-full bg-gray-800 text-white">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <a href="#home" className="hover:text-gray-400">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-400">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-400">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;