"use client";
import React, { useState } from "react";
import axios from "axios";
import { Copy, Check } from "lucide-react"; // Import Copy and Check icons
import { Loader2 } from "lucide-react"; // Spinner icon
import { toast } from "sonner";

export function KeywordExtractor() {
  const [inputText, setInputText] = useState<string>(""); // State for input text
  const [result, setResult] = useState<string[]>([]); // Store array of keywords
  const [copiedWord, setCopiedWord] = useState<string | null>(null); // Track which word was copied
  const [numKeywords, setNumKeywords] = useState<number>(10); // State for number of keywords
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // Handle extracting keywords
  const handleExtractKeywords = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post("http://localhost:5000/extract_keywords", {
        text: inputText,
        keywords: numKeywords, // Include number of keywords in the request body
      });
      // Extract only keywords (ignore the scores)
      const extractedKeywords = response.data.keywords.map((item: [string, number]) => item[0]);
      setResult(extractedKeywords); // Store the keywords for display
    } catch (error) {
      console.error("Error fetching the results:", error);
      setResult(["Error occurred while fetching results."]);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to copy individual keyword to clipboard
  const handleCopyWord = (word: string) => {
    navigator.clipboard.writeText(word);
    setCopiedWord(word); // Mark the copied word
    toast(word+" copied to clipboard");
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

        {/* Input field for the number of keywords (max 50) */}
        <div className="flex flex-col">
          <label htmlFor="numKeywords" className="mb-1 text-gray-700 dark:text-gray-300">
            Number of Keywords (Max 50):
          </label>
          <input
            id="numKeywords"
            type="number"
            min="1"
            max="50"
            value={numKeywords}
            onChange={(e) => setNumKeywords(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
          />
        </div>

        {/* Button to extract keywords */}
        <button
          className={`p-3 w-full text-white rounded-lg transition duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600"
          }`}
          onClick={handleExtractKeywords}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2" size={20} /> Extracting...
            </div>
          ) : (
            "Extract Keywords"
          )}
        </button>
      </div>

      {/* Right Side - Result Display */}
      <div className="p-6 w-full md:w-1/2 border-l border-gray-300 dark:border-gray-600">
        <h3 className="text-lg font-semibold dark:text-white text-gray-800">
          Extracted Keywords:
        </h3>
        <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 overflow-auto bg-gray-50 dark:bg-gray-900">
        {loading ? (
            <p className="text-gray-700 dark:text-gray-300">Extracting keywords, please wait...</p>
          ) : result.length > 0 ? (
            result.map((word, index) => (
              <span
                key={index}
                className="relative inline-block p-2 mr-2 mb-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer transition duration-200"
                onClick={() => handleCopyWord(word)}
              >
                {word}
                {/* Copy icon only appears on hover, doesn't affect the text */}
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                  {copiedWord === word ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <Copy size={16} className="text-gray-500" />
                  )}
                </span>
              </span>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-300">
              No keywords extracted yet. Please enter text and click 'Extract Keywords'.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
