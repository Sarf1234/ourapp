"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown visibility
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle clicks outside of the dropdown
  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  // Close the dropdown when an option is clicked
  const handleOptionClick = () => {
    setIsOpen(false);
  };

  // Add and clean up event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#144169] text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Login
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={handleOptionClick}
            >
              Account settings
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
              onClick={handleOptionClick}
            >
              Support
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              onClick={handleOptionClick}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
