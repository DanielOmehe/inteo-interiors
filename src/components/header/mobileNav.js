"use client";
import React, { useState } from 'react';

const MobileNav = () => {
    

    return (
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
    );
};

export default MobileNav;