"use client";
import React, { useState } from "react";
import axios from "axios";
import { Copy, Check } from "lucide-react"; // Import Copy and Check icons

export function KeywordExtractor() {
  const [inputText, setInputText] = useState<string>(""); // State for input text
  const [result, setResult] = useState<string[]>([]); // Store array of keywords
  const [copiedWord, setCopiedWord] = useState<string | null>(null); // Track which word was copied

  // Handle extracting keywords
  const handleExtractKeywords = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/extract_keywords",
        {
          text: inputText,
        }
      );
      // Extract only keywords (ignore the scores)
      const extractedKeywords = response.data.keywords.map(
        (item: [string, number]) => item[0]
      );
      setResult(extractedKeywords); // Store the keywords for display
    } catch (error) {
      console.error("Error fetching the results:", error);
      setResult(["Error occurred while fetching results."]);
    }
  };

  // Function to copy individual keyword to clipboard
  const handleCopyWord = (word: string) => {
    navigator.clipboard.writeText(word);
    setCopiedWord(word); // Mark the copied word
    setTimeout(() => setCopiedWord(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto min-h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
      {/* Left Side - Input and Button */}
      <div className="flex flex-col p-6 space-y-4 w-full md:w-1/2">
        <textarea
          rows={10}
          placeholder="Type or paste your text here..."
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Button to extract keywords */}
        <button
          className="p-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition duration-200"
          onClick={handleExtractKeywords}
        >
          Extract Keywords
        </button>
      </div>

      {/* Right Side - Result Display */}
      <div className="p-6 w-full md:w-1/2 border-l border-gray-300 dark:border-gray-600">
        <h3 className="text-lg font-semibold dark:text-white text-gray-800">
          Extracted Keywords:
        </h3>
        <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 overflow-auto bg-gray-50 dark:bg-gray-900">
          {result.length > 0 ? (
            result.map((word, index) => (
              <span
                key={index}
                className="inline-block p-2 mr-2 mb-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer transition duration-200 relative"
                onClick={() => handleCopyWord(word)}
              >
                {word}
                {/* Copy icon appears only on hover */}
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                  {copiedWord === word ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <Copy size={16} />
                  )}
                </span>
              </span>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-300">
              No keywords extracted yet. Please enter text and click 'Extract
              Keywords'.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
