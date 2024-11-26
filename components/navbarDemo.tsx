"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Menu as MenuIcon, X as XIcon } from "lucide-react"; // Import icons for mobile menu toggle

export default function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
        >
          InquiroAI
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="/document-analyser"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Document Analyser
          </a>
          <a
            href="/keyword-extractor"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Keyword Extractor
          </a>
          <a
            href="/document-similarity"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Document Similarity
          </a>
          <a
            href="/contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center space-x-2">
          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/document-analyser"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Document Analyser
          </a>
          <a
            href="/keyword-extractor"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Keyword Extractor
          </a>
          <a
            href="/document-similarity"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Document Similarity
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
