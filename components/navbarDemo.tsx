"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export default function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn("bg-white dark:bg-gray-800 shadow-md", className)}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          {/* Home Link */}
          <a href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
          {/* Document Analyzer Link */}
          <a href="/document-analyser" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Document Analyser</a>
          {/* Keyword Extractor Link */}
          <a href="/keyword-extractor" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Keyword Extractor</a>
          {/* Document Similarity Link */}
          <a href="/document-similarity" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Document Similarity</a>
          {/* Contact Link */}
          <a href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
