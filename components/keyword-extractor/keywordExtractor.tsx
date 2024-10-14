"use client";
import React, { useState } from "react";
import axios from "axios";
import { Copy, Check } from "lucide-react"; // Import Check icon for confirmation

export function KeywordExtractor() {
  const [inputText, setInputText] = useState<string>(""); // State for input text
  const [result, setResult] = useState<string>(""); // To display the fetched result
  const [copied, setCopied] = useState<boolean>(false); // State to track if text is copied

  // Handle extracting keywords
  const handleExtractKeywords = async () => {
    try {
      const response = await axios.post("/api/extract-keywords", {
        text: inputText,
      });
      setResult(response.data.keywords.join(", ")); // Join keywords for display
    } catch (error) {
      console.error("Error fetching the results:", error);
      setResult("Error occurred while fetching results.");
    }
  };

  // Function to copy input text to clipboard
  const handleCopyText = () => {
    navigator.clipboard.writeText(inputText);
    setCopied(true); // Set copied state to true
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto min-h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
      {/* Left Side - Input and Button */}
      <div className="flex flex-col p-6 space-y-4 w-full md:w-1/2">
        <textarea
          rows={5}
          placeholder="Type or paste your text here..."
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        {/* Button to copy text */}
        <div className="flex items-center space-x-2">
        <button
          className="p-2 flex items-center justify-center bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 transition duration-200"
          onClick={handleCopyText}
        >
          {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
        </button>

        {/* Button to extract keywords */}
        <button
          className="p-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition duration-200"
          onClick={handleExtractKeywords}
        >
          Extract Keywords
        </button>
      </div>
      </div>

      {/* Right Side - Result Display */}
      <div className="p-6 w-full md:w-1/2 border-l border-gray-300 dark:border-gray-600">
        <h3 className="text-lg font-semibold dark:text-white text-gray-800">Extracted Keywords:</h3>
        <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 overflow-auto bg-gray-50 dark:bg-gray-900">
          <p className="text-gray-700 dark:text-gray-300">
            {result ? result : "No keywords extracted yet. Please enter text and click 'Extract Keywords'."}
          </p>
        </div>
      </div>
    </div>
  );
}
